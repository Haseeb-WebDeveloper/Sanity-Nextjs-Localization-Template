import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocaleWrapper from "@/components/LocaleWrapper";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sanity Localization",
  description: "Sanity Localization",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={`${inter.variable}`}>
        <ThemeProvider>
          <LocaleWrapper locale={locale}>
            {children}
          </LocaleWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Generate static params for supported locales
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
