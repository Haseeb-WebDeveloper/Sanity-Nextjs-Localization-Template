import type { Metadata } from "next";
import { Inter, Sora, Newsreader } from "next/font/google";
import "./globals.css";
import LocaleWrapper from "@/components/i18n/LocaleWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { LOCALES } from "@/lib/i18n/constants";
import MainNav from "@/components/navigation/MainNav";

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-neue', // keeping the variable name for compatibility
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-sora',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-newsreader',
})
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
      <body className={`${inter.variable} ${sora.variable} ${newsreader.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleWrapper locale={locale}>
            <div className="container mx-auto">
            <MainNav />
              {children}
            </div>
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
