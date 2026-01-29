import { Injectable } from "@nestjs/common";

@Injectable()
export class SubmissionsService {
  async create(data: any) {
    return data;
  }

  async getById(id: string) {
    return { id };
  }
}
