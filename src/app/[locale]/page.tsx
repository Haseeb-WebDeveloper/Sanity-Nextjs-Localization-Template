import { getLocalizedHomePageTitle } from "@/lib/i18n/getSanityContent";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SanityLocalizedContent from "@/components/SanityLocalizedContent";

type HomeProps = {
  params: {
    locale: string;
  };
};

export default async function Home({ params: { locale } }: HomeProps) {
  // Get localized content from Sanity
  const localizedTitle = await getLocalizedHomePageTitle(locale);

  return (
    <div className="bg-black grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SanityLocalizedContent 
        sanityTitle={localizedTitle} 
        fallbackTitle={`Localization with Next.js and Sanity (${locale})`} 
      />
      
      <div className="w-full max-w-md">
        <LanguageSwitcher />
      </div>
    </div>
  );
}

// Generate static params for supported locales
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
