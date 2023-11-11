import withAuth from 'next-auth/middleware'
import { NextRequest } from 'next/server'

export default withAuth(function middleware(request: NextRequest) {

   const { pathname } = request.nextUrl

   if (pathname.includes('--admin--')) return

   const pathnameHasLocale = ['en', 'fa'].some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
   )

   if (pathnameHasLocale) return

   request.nextUrl.pathname = `/en${pathname}`
   return Response.redirect(request.nextUrl)
}, {
   callbacks: {
      authorized: ({ req, token }) => {
         if (
            req.nextUrl.pathname.includes('--admin--') &&
            token === null
         ) {
            return false
         }
         return true
      }
   }
})

export const config = {
   matcher: ['/((?!_next/static|_next/image|favicon.ico|font|icon.png|apple-icon.png|sitemap.xml|api/client).*)'],
}
