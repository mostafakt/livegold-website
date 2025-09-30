import { SignJWT, jwtVerify, type JWTPayload } from "jose";

const secret = process.env.NEXT_JWT_SECRET;
if (!secret) {
  throw new Error("NEXT_JWT_SECRET must be set in environment variables");
}

const encoder = new TextEncoder();
const key = encoder.encode(secret);

export async function signJwt(
  payload: Record<string, unknown>,
  options?: { expiresIn?: string }
) {
  const exp = options?.expiresIn ?? "7d";
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(exp)
    .sign(key);
}

export async function verifyJwt(token: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(token, key);
  return payload;
}
