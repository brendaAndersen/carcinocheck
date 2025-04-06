import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const locales = ['us', 'br', 'fr'];
const defaultLocale = 'us';

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale
});

export default async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    console.log(`Middleware executado para o caminho: ${pathname}`);
    if (pathname === '/' || pathname === '') {
        return Response.redirect(new URL(`/${defaultLocale}`, request.url));
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/', '/(us|br|fr)/:path*']
};