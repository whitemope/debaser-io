const KEY = "debaser-admin-auth";

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(KEY) === "1";
}

export function signIn(): void {
  if (typeof window !== "undefined") localStorage.setItem(KEY, "1");
}

export function signOut(): void {
  if (typeof window !== "undefined") localStorage.removeItem(KEY);
}
