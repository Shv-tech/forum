import { Injectable } from "@nestjs/common";

@Injectable()
export class RefusalPolicy {
  mustRefuse(query: string): boolean {
    const prohibited = ["predict", "decide", "recommend", "judge"];
    return prohibited.some((p) =>
      query.toLowerCase().includes(p),
    );
  }

  response() {
    return {
      answer:
        "This request falls outside the assistant’s informational scope.",
      citations: [],
    };
  }
}
