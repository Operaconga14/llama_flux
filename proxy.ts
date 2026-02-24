import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = ['https://llamaflux.netlify.app/']

const corsOptions = {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export function proxy(request: NextRequest) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
}

export const config = {
    matcher: [
        "/dashboard/:path*",
    ]
}