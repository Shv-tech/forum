import { Module } from "@nestjs/common";
import { AiController } from "./ai.controller";
import { RetrievalService } from "./retrieval.service";
import { CitationBuilder } from "./citation.builder";
import { RefusalPolicy } from "./refusal.policy";
import { SafetyGuard } from "./safety.guard";

@Module({
  controllers: [AiController],
  providers: [
    RetrievalService,
    CitationBuilder,
    RefusalPolicy,
    SafetyGuard,
  ],
})
export class AiModule {}
