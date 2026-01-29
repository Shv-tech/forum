import { Injectable } from "@nestjs/common";

@Injectable()
export class CitationBuilder {
  build(documents: any[]) {
    return documents.map((doc) => ({
      id: doc.id,
      title: doc.title,
      source: doc.source,
    }));
  }
}
