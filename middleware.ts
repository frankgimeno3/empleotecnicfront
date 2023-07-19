import { NextResponse, NextRequest } from "next/server";
import { jwtVerify, JWTVerifyResult } from "jose";

interface JWTPayload {
  [key: string]: string | undefined;
}

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get("authvalue") as string | undefined;
  if (!jwt) {
    console.log("está pasando esto");
    return NextResponse.redirect(new URL("/iniciarsesion", request.url));
  }  

  try {
    if(jwt) {
      return NextResponse.next();
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/iniciarsesion", request.url));
  }
  
}

export const config = {
  matcher: ["/dashboard/:path*"],
};