import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value
  const url = request.nextUrl.clone()
  const isAuth = !!token

  // Redirect if user is logged in and tries to go to "/"
  if (url.pathname === "/" && isAuth) {
    url.pathname = "/chat"
    return NextResponse.redirect(url)
  }

  // Redirect if user is not logged in and tries to access "/chat"
  if (url.pathname === "/chat" && !isAuth) {
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}


export const config = {
    matcher: ['/', '/chat', '/profile']
}