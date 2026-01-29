import { Injectable } from "@nestjs/common";

@Injectable()
export class InstitutionsService {
  async getInstitution(id: string) {
    return { id };
  }
}
