"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n/context';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher: React.FC = () => {
  const { locale, t } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  console.log(locale);
  console.log(t);
  
  // Switch language and navigate to the equivalent path in the new language
  const handleLanguageChange = (newLocale: string) => {
    // Extract the path without the language prefix
    const pathWithoutLocale = pathname.replace(/^\/(en|it)/, '') || '/';
    
    // Navigate to the same path but with new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">{t('language')}:</span>
      <div className="flex gap-2">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            locale === 'en'
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-200 hover:bg-gray-300 text-black dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
          }`}
          aria-current={locale === 'en' ? 'true' : 'false'}
        >
          {t('english')}
        </button>
        <button
          onClick={() => handleLanguageChange('it')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            locale === 'it'
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-200 hover:bg-gray-300 text-black dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
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