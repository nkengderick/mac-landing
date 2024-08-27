import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);
const isSignUpRoute = createRouteMatcher(['/sign-up(.*)']);

const intlMiddleware = createMiddleware({
  locales: ['en', 'fr', 'es', 'de'],
  defaultLocale: 'en',
});

export default clerkMiddleware((auth, request) => {
  if (isDashboardRoute(request)) {
    auth().protect();
  }

  return intlMiddleware(request);
});

export const config = {
  matcher: [
    // Other routes
    '/((?!_next|_vercel|.*\\..*).*)',
    '/(api|trpc)(.*)',
    // Ensure the sign-up route is not protected
    '/sign-up/[[...rest]]',
  ],
};
