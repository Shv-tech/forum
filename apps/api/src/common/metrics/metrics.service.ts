import { Injectable } from "@nestjs/common";

@Injectable()
export class MetricsService {
  incrementCounter(_name: string): void {
    // Prometheus / OpenTelemetry hook point
  }

  observeLatency(_name: string, _ms: number): void {
    // Histogram hook
  }
}
