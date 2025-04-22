"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n/context';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="flex items-center gap-4">
      <span>{t('language')}:</span>
      <div className="flex gap-2">
        <button
          onClick={() => setLocale('en')}
          className={`px-3 py-1 rounded ${
            locale === 'en'
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-200 text-black dark:bg-gray-700 dark:text-white'
          }`}
          aria-current={locale === 'en' ? 'true' : 'false'}
        >
          {t('english')}
        </button>
        <button
          onClick={() => setLocale('it')}
          className={`px-3 py-1 rounded ${
            locale === 'it'
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-200 text-black dark:bg-gray-700 dark:text-white'
          }`}
          aria-current={locale === 'it' ? 'true' : 'false'}
        >
          {t('italian')}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 