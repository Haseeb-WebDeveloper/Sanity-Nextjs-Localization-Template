import { getLocalizedHomePageTitle } from "@/lib/i18n/getSanityContent";
import { LOCALES } from "@/lib/i18n/constants";


export default async function Home({ params }: { params: Promise<{ locale: string }>}) {
  const { locale } = await params;
  // Get localized content from Sanity
  const localizedTitle = await getLocalizedHomePageTitle(locale);

  return (
     <div className="w-full flex flex-col items-center justify-center h-screen">
      <h1 className="text-[2vw] md:text-[3vw]">{localizedTitle}</h1>
     </div>
  );
}


export async function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}
