import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(request.nextUrl);
  
  const token = request.cookies.get("token")?.value
  const url = request.nextUrl.clone()
  const isAuth = !!token

  // Redirect if user is not logged in and tries to access "/chat"
  if (url.pathname.startsWith("/chat") && !isAuth) {
    url.pathname = "/login"
    
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/chat/:path*', '/profile'],
}
