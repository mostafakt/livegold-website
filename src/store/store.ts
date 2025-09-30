import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { user, userAuth } from "./api/user";

export const store = configureStore({
  reducer: {
    [user.reducerPath]: user.reducer, // => "api": api.reducer
    [userAuth.reducerPath]: userAuth.reducer, // => "api": api.reducer
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(user.middleware, userAuth.middleware),
});

// Types for convenience
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
