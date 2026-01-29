import { optionalEnv } from "./env";

export const AiConfig = {
  provider: optionalEnv("AI_PROVIDER", "openai"),

  model: optionalEnv("AI_MODEL", "gpt-4o-mini"),

  behavior: {
    mode: "retrieval-only" as const,
    allowOpinion: false,
    allowPrediction: false,
    allowRecommendation: false,
    allowDecision: false,
  },

  limits: {
    maxQueryLength: 2_000,
    maxResults: 10,
    rateLimitPerMinute: 30,
  },

  disclosure: {
    required:
      "This assistant provides informational navigation only and is not an authority.",
  },
};
