import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'fr', 'es', 'de'],
    defaultLocale: 'en'
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(fr|en|es|de)/:path*',
    
    '/', '/marketplace', '/explore', '/resources', '/sign-up', '/sing-in', '/events', '/profile', '/community', '/(en|fr)/:path*',
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};


