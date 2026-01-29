import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { RetrievalService } from "./retrieval.service";
import { CitationBuilder } from "./citation.builder";
import { RefusalPolicy } from "./refusal.policy";
import { SafetyGuard } from "./safety.guard";

@Controller("ai")
@UseGuards(SafetyGuard)
export class AiController {
  constructor(
    private readonly retrieval: RetrievalService,
    private readonly citations: CitationBuilder,
    private readonly refusal: RefusalPolicy,
  ) {}

  @Post("assist")
  async assist(@Body() body: { query: string }) {
    if (this.refusal.mustRefuse(body.query)) {
      return this.refusal.response();
    }

    const docs = await this.retrieval.retrieve(body.query);
    return {
      answer: this.retrieval.composeAnswer(docs),
      citations: this.citations.build(docs),
      disclaimer:
        "This assistant provides navigational and contextual information only.",
    };
  }
}
