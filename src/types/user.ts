export interface IGuestRes {
  user: User;
  guestToken: string;
  tokenExpiresAt: string;
  message: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  language: string;
  isBlocked: boolean;
  userType: "guest" | "registered";
  browserInfo: BrowserInfo;
  locationInfo: LocationInfo;
  guestToken: GuestToken;
}

export interface BrowserInfo {
  userAgent: string;
  browser: string;
  browserVersion: string;
  device: string;
  operatingSystem: string;
}

export interface LocationInfo {
  ipAddress: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  timezone: string;
  isp: string;
}

export interface GuestToken {
  token: string;
  tokenType: string;
  expiresAt: string;
  isActive: boolean;
}
