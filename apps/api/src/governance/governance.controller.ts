import { Controller, Get } from "@nestjs/common";

@Controller("governance")
export class GovernanceController {
  @Get("policies")
  async list() {
    return [];
  }
}
