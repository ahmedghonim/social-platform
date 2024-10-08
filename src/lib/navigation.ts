import { locales } from "../i18n";

import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const localePrefix = "as-needed"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
