import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("session")
  async getSession(@Req() req: Request) {
    const sessionCookie = req.cookies["__platform_session"];
    return this.authService.validateSession(sessionCookie);
  }
}
