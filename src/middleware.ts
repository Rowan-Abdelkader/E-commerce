import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const { pathname } = request.nextUrl

  const authPage = ["/login", "/register", "/forgetPassword"]
  const routes = ["/", "/brands", "/categories", "/cart", "/proudectDetials", "/wishlist"]

  // Redirect if not logged in and trying to access protected routes
  if (!token && routes.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect if logged in and trying to access auth pages
  if (token && authPage.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// Config for middleware matcher
export const config = {
  matcher: ["/", "/brands", "/categories", "/cart", "/proudectDetials", "/login", "/register", "/wishlist", "/forgetPassword"],
}
