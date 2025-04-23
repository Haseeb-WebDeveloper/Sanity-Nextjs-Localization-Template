"use client";

import React from 'react';
import Image from 'next/image';
import { AboutPageContent } from '@/lib/i18n/getSanityContent';
import { useLocale } from '@/lib/i18n/context';

type AboutSectionProps = {
  content: AboutPageContent | null;
};

/**
 * AboutSection Component
 * Displays the about page content from Sanity
 */
const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  const { t } = useLocale();

  if (!content) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">{t('noContent')}</h2>
        <p className="mt-4">{t('contentMissing')}</p>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{content.title || t('about')}</h2>
          
          {content.description && (
            <div className="prose dark:prose-invert">
              <p className="text-lg">{content.description}</p>
            </div>
          )}
          
          {content.mission && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">{t('ourMission')}</h3>
              <p className="text-muted-foreground">{content.mission}</p>
            </div>
          )}
        </div>
        
        {content.imageUrl && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={content.imageUrl}
              alt={content.title || t('about')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection; 