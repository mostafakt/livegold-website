import { redirect } from "next/navigation";
import { clearAuthToken, getAuthToken } from "./server";

export async function authUser() {
  const { token, isGuest, expiresAt } = await getAuthToken();

  const now = new Date();

  if (token && expiresAt) {
    if (new Date(expiresAt) > now) return;
    else {
      if (!isGuest) {
        // regular user → must login
        await clearAuthToken();
        redirect("/login");
        return;
      }
    }
  }

  // const data = await createGuestUser();
  // return data;
}
