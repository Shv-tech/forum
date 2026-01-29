import { requireEnv, optionalEnv } from "./env";

export const AuthConfig = {
  session: {
    secret: requireEnv("SESSION_SECRET"),
    cookieName: "__platform_session",
    httpOnly: true,
    sameSite: "lax" as const,
    secure: optionalEnv("NODE_ENV") === "production",
    maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
  },

  oauth: {
    google: {
      clientId: optionalEnv("GOOGLE_CLIENT_ID"),
      clientSecret: optionalEnv("GOOGLE_CLIENT_SECRET"),
    },
    orcid: {
      clientId: optionalEnv("ORCID_CLIENT_ID"),
      clientSecret: optionalEnv("ORCID_CLIENT_SECRET"),
    },
  },
};
