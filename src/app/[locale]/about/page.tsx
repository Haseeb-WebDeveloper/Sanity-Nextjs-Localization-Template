import { LOCALES } from "@/lib/i18n/constants";
import { getAboutPageContent } from "@/lib/i18n/getSanityContent";
import { Metadata } from "next";
import AboutSection from "@/components/about/AboutSection";


// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }>}): Promise<Metadata> {
  const { locale } = await params;
  const aboutData = await getAboutPageContent(locale);
  
  return {
    title: aboutData?.title || `About Us | Next.js + Sanity Localization`,
  };
}


export default async function AboutPage({ params }: { params: Promise<{ locale: string }>}) {
  const { locale } = await params;
  // Fetch about page content from Sanity
  const aboutContent = await getAboutPageContent(locale);

  return (
      <AboutSection content={aboutContent} />
  );
}


export async function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
} 