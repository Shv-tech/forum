import { Injectable } from "@nestjs/common";

@Injectable()
export class SearchService {
  async index(_entity: unknown): Promise<void> {
    // Production: OpenSearch / Meilisearch adapter
  }

  async query(_q: string): Promise<unknown[]> {
    return [];
  }
}
