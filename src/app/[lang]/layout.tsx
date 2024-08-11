import { NextIntlClientProvider, useMessages } from "next-intl";
import { Metadata } from "next";
import "./globals.css";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: `${"Ghonim"} | %s`,
      default: "Ghonim",
    },
    description: "description",
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const messages = useMessages();

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
