import { Controller, Get, Param } from "@nestjs/common";

@Controller("institutions")
export class InstitutionsController {
  @Get(":id")
  async get(@Param("id") id: string) {
    return { id };
  }
}
