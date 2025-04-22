"use client";

import React from 'react';
import { LocaleProvider } from '@/lib/i18n/context';
import { translations } from '@/lib/i18n/translations';

type LocaleWrapperProps = {
  children: React.ReactNode;
  locale: string;
};

const LocaleWrapper: React.FC<LocaleWrapperProps> = ({ children, locale }) => {
  return (
    <LocaleProvider initialLocale={locale} translations={translations}>
      {children}
    </LocaleProvider>
  );
};

export default LocaleWrapper; 