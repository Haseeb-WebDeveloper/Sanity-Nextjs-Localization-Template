import { fetchSanityData } from '../sanity/fetch';
import { getHomePageQuery, getAllLocales, getAboutPageQuery, getFullAboutPageQuery } from '../sanity/queries';
import { urlFor } from '../sanity/client';

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

export type AboutPageContent = {
  title: string;
  description: string;
  mission: string;
  image?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  imageUrl?: string;
};

export async function getAboutPageContent(locale: string): Promise<AboutPageContent | null> {
  const data = await fetchSanityData<AboutPageContent>(
    getAboutPageQuery(locale),
    {},
    { revalidate: 60 }
  );
  
  if (!data) return null;
  
  // Generate image URL if image exists
  if (data.image) {
    data.imageUrl = urlFor(data.image).width(1200).url();
  }
  
  return data;
} 