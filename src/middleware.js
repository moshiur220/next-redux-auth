// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
    console.log("load page");
  const token = req.cookies.get('token')?.value;
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL('/user/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/protected/:path*',
};
