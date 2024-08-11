import { locales } from "./i18n";
import { localePrefix } from "./lib/navigation";
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    defaultLocale: "en",
    localePrefix,
    locales,
  });

  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
