import arcjet, { createMiddleware, detectBot, shield } from "@arcjet/next";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
  "/api/chat(.*)",
  "/api/predictions(.*)",
]);

const clerk = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

const isProduction = process.env.NODE_ENV === "production";
const hasArcjetKey = Boolean(process.env.ARCJET_KEY);

const aj =
  isProduction && hasArcjetKey
    ? arcjet({
        key: process.env.ARCJET_KEY,
        rules: [
          shield({ mode: "LIVE" }),
          detectBot({
            mode: "LIVE",
            allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"],
          }),
        ],
      })
    : null;

const middleware = aj ? createMiddleware(aj, clerk) : clerk;
export default middleware;

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};