import { Controller, Post, Get, Param, Body } from "@nestjs/common";

@Controller("submissions")
export class SubmissionsController {
  @Post()
  async create(@Body() body: any) {
    return body;
  }

  @Get(":id")
  async get(@Param("id") id: string) {
    return { id };
  }
}
