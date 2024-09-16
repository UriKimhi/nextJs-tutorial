import { NextResponse } from "next/server";

export function middleware(request) {
  // return NextResponse.redirect(new URL("/", request.url));
  return console.log("counter");
}

export const config = {
  matcher: ["/about/:path*"],
};
