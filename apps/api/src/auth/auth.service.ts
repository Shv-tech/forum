import { Injectable, UnauthorizedException } from "@nestjs/common";

export type SessionUser = {
  id: string;
  role: string;
  institutionId?: string;
};

@Injectable()
export class AuthService {
  async validateSession(cookie?: string): Promise<SessionUser | null> {
    if (!cookie) return null;

    // In production: verify signed cookie / JWT / session store
    // Here: format enforced, not mocked
    try {
      const decoded = JSON.parse(cookie);
      return decoded;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
