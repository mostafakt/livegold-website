import { User } from "./user";

export interface loginData {
  password: string;
  email: string;
}
export interface verifyEmailData {
  email: string;
  verificationCode: string;
}
export interface ConvertUSerData {
  guestUserId: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  language: string;
}

export interface ILoginRes {
  accessToken: string;
  accessTokenExpiresAt: string;
  user: User;
  refreshToken: string;
  refreshTokenExpiresAt: string;
}
