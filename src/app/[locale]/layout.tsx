import type { Metadata } from "next";
import "./globals.css";
import LocaleWrapper from "@/components/i18n/LocaleWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { LOCALES } from "@/lib/i18n/constants";
import MainNav from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "Sanity Localization",
  description: "Localized content with Next.js and Sanity",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

/**
 * Root Layout Component
 * Provides locale context and theme to the entire application
 */
export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleWrapper locale={locale}>
            <main>
              <MainNav />
              {children}
            </main>
          </LocaleWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}


//  Generate static params for supported locales
export async function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}
