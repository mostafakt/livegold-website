import { User } from "@/types/user";
import {
  clearAuthTokenClient,
  setAuthTokenClient,
} from "@/utils/auth-helpers/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// export type User =

export type AuthState = {
  user: User | null;
  token: string | null;
  tokenExpiresAt: string | null;
  isGuest: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  tokenExpiresAt: null,
  isGuest: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ user: User }>) {
      state.user = action.payload.user ?? null;
    },
    setAuth(state, action: PayloadAction<AuthState>) {
      state.user = action.payload.user ?? null;
      state.token = action.payload.token ?? null;
      state.tokenExpiresAt = action.payload.tokenExpiresAt ?? null;
      state.isGuest = action.payload.isGuest ?? false;
      setAuthTokenClient(
        action.payload.token ?? "",
        action.payload.isGuest,
        action.payload.tokenExpiresAt ?? "",
        action.payload.user
      );
    },
    clearAuth(state) {
      clearAuthTokenClient();
      state.user = null;
      state.token = null;
      state.tokenExpiresAt = null;
      state.isGuest = false;
    },
  },
});

export const { setAuth, clearAuth, setUser } = authSlice.actions;
export default authSlice.reducer;
