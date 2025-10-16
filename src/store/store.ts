import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { user, userAuth } from "./api/user";
import { blogsApi } from "./api/blogs";
import { metalPrice } from "./api/metal-price";

export const store = configureStore({
  reducer: {
    [user.reducerPath]: user.reducer, // => "api": api.reducer
    [userAuth.reducerPath]: userAuth.reducer, // => "api": api.reducer
    [blogsApi.reducerPath]: blogsApi.reducer, // => "api": api.reducer
    [metalPrice.reducerPath]: metalPrice.reducer, // => "api": api.reducer
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      user.middleware,
      blogsApi.middleware,
      userAuth.middleware,
      metalPrice.middleware
    ),
});

// Types for convenience
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
