import { getLocalizedHomePageTitle } from "@/lib/i18n/getSanityContent";
import { LOCALES } from "@/lib/i18n/constants";


export default async function Home({ params }: { params: Promise<{ locale: string }>}) {
  const { locale } = await params;
  // Get localized content from Sanity
  const localizedTitle = await getLocalizedHomePageTitle(locale);

  return (
     <div>
      <h1>{localizedTitle}</h1>
     </div>
  );
}


export async function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}
