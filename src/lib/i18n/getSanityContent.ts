import { fetchSanityData } from '../sanity/fetch';
import { getHomePageQuery, getAllLocales } from '../sanity/queries';

export async function getLocalizedHomePageTitle(locale: string): Promise<string> {
  const data = await fetchSanityData<{ [key: string]: string }>(
    getHomePageQuery(locale),
    {},
    { revalidate: 60 } // Cache for 60 seconds
  );
  
  return data[locale] || '';
}

export async function getAllLocalizedContent() {
  return fetchSanityData<{ en: string; it: string }>(
    getAllLocales(),
    {},
    { revalidate: 60 }
  );
} 