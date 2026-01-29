import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  async getById(id: string) {
    return { id };
  }
}
