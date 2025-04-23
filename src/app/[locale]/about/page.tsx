import { LOCALES } from "@/lib/i18n/constants";
import { getAboutPageContent } from "@/lib/i18n/getSanityContent";
import { Metadata } from "next";
import AboutSection from "@/components/about/AboutSection";

type AboutPageProps = {
  params: {
    locale: string;
  };
};

// Generate metadata for the page
export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const aboutData = await getAboutPageContent(params.locale);
  
  return {
    title: aboutData?.title || `About Us | Next.js + Sanity Localization`,
  };
}

/**
 * About Page Component
 * Displays content from Sanity CMS
 */
export default async function AboutPage({ params: { locale } }: AboutPageProps) {
  // Fetch about page content from Sanity
  const aboutContent = await getAboutPageContent(locale);

  return (
      <AboutSection content={aboutContent} />
  );
}

/**
 * Generate static params for supported locales
 * This function enables static generation for all supported locales
 */
export async function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
} 