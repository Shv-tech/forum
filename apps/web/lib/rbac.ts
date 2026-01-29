import { ROLES } from "./constants";
import { PERMISSIONS } from "./permissions";

const ROLE_PERMISSION_MAP: Record<string, readonly string[]> = {
  [ROLES.OBSERVER]: [PERMISSIONS.READ_PUBLIC],
  [ROLES.CONTRIBUTOR]: [
    PERMISSIONS.READ_PUBLIC,
    PERMISSIONS.SUBMIT_DRAFT,
  ],
  [ROLES.REVIEWER]: [
    PERMISSIONS.READ_PUBLIC,
    PERMISSIONS.REVIEW_WRITE,
  ],
  [ROLES.INSTITUTION_ADMIN]: [
    PERMISSIONS.READ_PUBLIC,
    PERMISSIONS.SUBMIT_PUBLISH,
    PERMISSIONS.AFFILIATION_APPROVE,
  ],
  [ROLES.STEWARD]: Object.values(PERMISSIONS),
};

export function hasPermission(
  role: string,
  permission: string
): boolean {
  return ROLE_PERMISSION_MAP[role]?.includes(permission) ?? false;
}
