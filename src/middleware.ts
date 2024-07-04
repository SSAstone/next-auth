// export { default } from "next-auth/middleware"
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(request: NextRequestWithAuth) {
        // console.log('withAuth', request.nextUrl.pathname)
        // console.log("mmmmmm", request.nextauth.token)

        if (request.nextUrl.pathname.startsWith("/about")
            && request.nextauth.token?.role !== "user") {
            return NextResponse.rewrite(
                new URL("/", request.url)
            )
            // return NextResponse.rewrite(
            //     new URL("/", request.url)
            // )
        }

        if (request.nextUrl.pathname.startsWith("/dashboard")
            && request.nextauth.token?.role !== "admin"
            && request.nextauth.token?.role !== "manager") {
            return NextResponse.rewrite(
                new URL("/", request.url)
            )
        }
    },
    {
        callbacks: {
            // authorized: ({ token }) => token?.role === "admin",
            authorized: ({ token }) => !!token
        },
    }
)

export const config = { matcher: ["/dashboard", "/about"] }