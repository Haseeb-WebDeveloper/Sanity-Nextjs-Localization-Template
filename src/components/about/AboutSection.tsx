"use client";

import React from 'react';
import Image from 'next/image';
import { AboutPageContent } from '@/lib/i18n/getSanityContent';
import { useLocale } from '@/lib/i18n/context';

type AboutSectionProps = {
  content: AboutPageContent | null;
};

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
    <section className="w-full px-[2vw] md:px-[3vw] py-[1vw] md:py-[1.5vw]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-[2vw] md:text-[3vw] font-bold">{content.title || t('about')}</h2>
          
          {content.description && (
            <div className="prose dark:prose-invert">
              <p className="text-[1.5vw] md:text-[2vw]">{content.description}</p>
            </div>
          )}
          
          {content.mission && (
            <div className="mt-8">
              <h3 className="text-[1.5vw] md:text-[2vw] font-semibold mb-3">{t('ourMission')}</h3>
              <p className="text-[1vw] md:text-[1.5vw]">{content.mission}</p>
            </div>
          )}
        </div>
        
        {content.imageUrl && (
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
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