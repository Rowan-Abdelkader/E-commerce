import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {

const token = await getToken({req:request})
const {pathname} = request.nextUrl
const authPage =["/login" , "/register"]
const routes =["/" , "/brands" , "/categories" ,"/cart" ,"/proudectDetials", "/wishlist"]


if(!token && routes.includes(pathname)){
	return NextResponse.redirect(new URL('/login',request.url))
}

if (token && authPage.includes(pathname)){
	return NextResponse.redirect(new URL('/', request.url))
}
 
  return NextResponse.next()
}
export const config = {
	//aly h7mihom
  matcher: ["/" , "/brands" , "/categories" ,"/cart" ,"/proudectDetials" ,"/login" ,"/register", "/wishlist"],
}
