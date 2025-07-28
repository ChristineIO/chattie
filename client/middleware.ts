import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(request.nextUrl);
  
  const token = request.cookies.get("token")?.value
  const url = request.nextUrl.clone()
  const isAuth = !!token

 // Normalize the pathname to remove trailing slashes
  url.pathname = url.pathname.replace(/\/+$/, "")

  // Redirect if user is logged in and tries to go to "/"
  if (url.pathname === "/" && isAuth) {
    url.pathname = "/chat"
    return NextResponse.redirect(url)
  }

  // Redirect if user is not logged in and tries to access "/chat"
  if (url.pathname.startsWith("/chat") && !isAuth) {
    url.pathname = "/login"
    
    console.log(url.pathname);
    
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/chat/:path*', '/profile'],
}
