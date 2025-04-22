"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n/context';

type SanityLocalizedContentProps = {
  fallbackTitle: string;
  sanityTitle?: string;
};

const SanityLocalizedContent: React.FC<SanityLocalizedContentProps> = ({ 
  fallbackTitle,
  sanityTitle 
}) => {
  const { t } = useLocale();
  
  // Use Sanity content if available, otherwise use the translated fallback
  const displayTitle = sanityTitle || t('title') || fallbackTitle;
  
  return (
    <h1 className="text-3xl font-bold text-center mb-8">{displayTitle}</h1>
  );
};

export default SanityLocalizedContent; 