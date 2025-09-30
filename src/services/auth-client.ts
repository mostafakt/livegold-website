// import { apiFetch } from "../lib/api-client";
// import type { LoginDto } from "../lib/validators/auth";
// import { User } from "@/types/user";

// export async function login(payload: LoginDto): Promise<{ user: User }> {
//   return apiFetch<{ user: User }>("/api/auth/login", "login", {
//     method: "POST",
//     body: JSON.stringify(payload),
//   });
// }

// export async function logout(): Promise<{ ok: boolean }> {
//   return apiFetch<{ ok: boolean }>("/api/auth/logout", "logout", {
//     method: "POST",
//   });
// }

// export async function fetchCurrentUser(): Promise<{ user: User }> {
//   return apiFetch<{ user: User }>("/api/auth/me", "me", { method: "GET" });
// }
