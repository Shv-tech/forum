import { Controller, Post, Body } from "@nestjs/common";

@Controller("affiliations")
export class AffiliationsController {
  @Post("approve")
  async approve(@Body() body: { userId: string; institutionId: string }) {
    return body;
  }
}
