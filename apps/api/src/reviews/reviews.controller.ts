import { Controller, Post, Body } from "@nestjs/common";

@Controller("reviews")
export class ReviewsController {
  @Post()
  async write(@Body() body: any) {
    return body;
  }
}
