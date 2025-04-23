"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n/context';

/**
 * SanityLocalizedContent props
 */
type SanityLocalizedContentProps = {
  fallbackTitle: string;
  sanityTitle?: string;
  className?: string;
};

/**
 * SanityLocalizedContent component
 * Displays content from Sanity CMS with localization fallbacks
 */
const SanityLocalizedContent: React.FC<SanityLocalizedContentProps> = ({ 
  fallbackTitle,
  sanityTitle,
  className = "text-3xl font-bold text-center mb-8"
}) => {
  const { t } = useLocale();
  
  // Use Sanity content if available, otherwise use the translated fallback
  const displayTitle = sanityTitle || t('title') || fallbackTitle;
  
  return (
    <h1 className={className}>{displayTitle}</h1>
  );
};

export default SanityLocalizedContent; 