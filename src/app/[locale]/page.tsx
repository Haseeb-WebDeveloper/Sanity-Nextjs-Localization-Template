import { getLocalizedHomePageTitle } from "@/lib/i18n/getSanityContent";
import SanityLocalizedContent from "@/components/i18n/SanityLocalizedContent";
import { LOCALES } from "@/lib/i18n/constants";

type HomeProps = {
  params: {
    locale: string;
  };
};

/**
 * Home Page Component
 * The main landing page of the application with localized content
 */
export default async function Home({ params: { locale } }: HomeProps) {
  // Get localized content from Sanity
  const localizedTitle = await getLocalizedHomePageTitle(locale);

  return (
      <SanityLocalizedContent 
        sanityTitle={localizedTitle} 
        fallbackTitle={`Localization with Next.js and Sanity (${locale})`} 
      />
  );
}

/**
 * Generate static params for supported locales
 * This function enables static generation for all supported locales
 */
export async function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}
