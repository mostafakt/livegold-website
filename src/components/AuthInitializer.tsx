/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useCreateGuestMutation } from "@/store/api/user";
import { clearAuth, setAuth } from "@/store/slices/authSlice";

import { getAuthTokenClient } from "@/utils/auth-helpers/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
  const [createGuestUser, { data, isSuccess }] = useCreateGuestMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const { token, isGuest, expiresAt, user } = getAuthTokenClient();
      const now = new Date();
      console.log(user);

      if (token && expiresAt && new Date(expiresAt) > now) {
        dispatch(
          setAuth({
            token: token,
            isGuest: isGuest,
            tokenExpiresAt: expiresAt,
            user: user,
          })
        );

        return;
      }

      if (token && expiresAt && new Date(expiresAt) <= now && !isGuest) {
        dispatch(clearAuth());
        router.replace("/login");

        return;
      }

      dispatch(clearAuth());
      createGuestUser();
    };

    checkAuth();
  }, []);
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(
        setAuth({
          token: data.guestToken,
          isGuest: true,
          tokenExpiresAt: data.tokenExpiresAt,
          user: data.user,
        })
      );
    }
  }, [data, isSuccess]);

  return <>{children}</>;
};

export default AuthInitializer;
