import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("audit")
export class AuditController {
  @Get("events")
  async list(@Req() req: Request) {
    return {
      message:
        "Audit events are restricted and require steward-level access.",
    };
  }
}
