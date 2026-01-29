export const APP_NAME = "Institutional Deliberation Platform";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

export const SESSION_COOKIE_NAME = "__platform_session";

export const ROLES = {
  OBSERVER: "observer",
  CONTRIBUTOR: "contributor",
  REVIEWER: "reviewer",
  INSTITUTION_ADMIN: "institution_admin",
  STEWARD: "steward",
} as const;
