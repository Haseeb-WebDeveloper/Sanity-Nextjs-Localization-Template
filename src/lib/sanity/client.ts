import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "z3pph7sw",
    dataset: "production",
    apiVersion: '2024-03-21',
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
} 