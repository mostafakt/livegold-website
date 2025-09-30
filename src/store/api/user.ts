/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { IGuestRes, User } from "@/types/user";
import { baseQueryHandler, baseQueryWithRetry } from "./middleware";
import {
  ConvertUSerData,
  ILoginRes,
  loginData,
  verifyEmailData,
} from "@/types/auth";

export const user = createApi({
  reducerPath: "user",
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) => ({
    createGuest: builder.mutation<IGuestRes, void>({
      query: () => ({ url: "/customer/v1/users/guest", method: "POST" }),
    }),
  }),
});
export const userAuth = createApi({
  reducerPath: "auth-user",
  baseQuery: baseQueryHandler,
  endpoints: (builder) => ({
    loginEmail: builder.mutation<ILoginRes, loginData>({
      query: (body: loginData) => ({
        url: "customer/v1/auth-sessions/email",
        method: "POST",
        body,
      }),
    }),
    verifyEmail: builder.mutation<ILoginRes, verifyEmailData>({
      query: (body: verifyEmailData) => ({
        url: "public/v1/users/verify-email",
        method: "POST",
        body,
      }),
    }),
    convertUser: builder.mutation<User, ConvertUSerData>({
      query: (body: ConvertUSerData) => ({
        url: "customer/v1/users/convert-guest",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateGuestMutation } = user;
export const {
  useLoginEmailMutation,
  useVerifyEmailMutation,
  useConvertUserMutation,
} = userAuth;
