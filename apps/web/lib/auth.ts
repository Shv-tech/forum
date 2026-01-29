import { SESSION_COOKIE_NAME } from "./constants";

export type SessionUser = {
  id: string;
  role: string;
  institutionId?: string;
};

export async function getSession(): Promise<SessionUser | null> {
  const res = await fetch("/api/session", {
    credentials: "include",
  });

  if (!res.ok) return null;
  return res.json();
}
