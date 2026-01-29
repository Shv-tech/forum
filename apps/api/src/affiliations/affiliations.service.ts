import { Injectable } from "@nestjs/common";

@Injectable()
export class AffiliationsService {
  async approve(_userId: string, _institutionId: string) {
    return true;
  }
}
