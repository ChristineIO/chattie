import { NextResponse, NextRequest } from 'next/server'
import { authCheck } from './api/api'

export async function middleware(request: NextRequest) {
    let auth = request.cookies.get('token')?.value
    const url = request.nextUrl.clone()
    if (url.pathname === '/chat' && auth) {
    } else if (url.pathname === '/chat' && auth == null || undefined) {
        url.pathname = "/login"
        return NextResponse.redirect(url)
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/chat', '/profile']
}