export const ROLE_PERMISSIONS: Record<string, readonly string[]> = {
  observer: ["read:public"],
  contributor: ["read:public", "submit:draft"],
  reviewer: ["read:public", "review:write"],
  institution_admin: [
    "read:public",
    "submit:publish",
    "affiliation:approve",
  ],
  steward: ["*"],
};

export function hasPermission(role: string, permission: string): boolean {
  const perms = ROLE_PERMISSIONS[role] ?? [];
  return perms.includes("*") || perms.includes(permission);
}
