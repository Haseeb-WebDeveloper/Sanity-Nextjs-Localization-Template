"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n/context';
import { usePathname, useRouter } from 'next/navigation';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';
import { LOCALES, LOCALE_NAMES } from '@/lib/i18n/constants';

const LanguageSwitcher: React.FC = () => {
  const { locale, t } = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  
  // Switch language and navigate to the equivalent path in the new language
  const handleLanguageChange = (newLocale: string) => {
    // Extract the path without the language prefix
    const pathWithoutLocale = pathname.replace(/^\/(en|it)/, '') || '/';
    
    // Navigate to the same path but with new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 px-[1vw] py-[0.5vw] rounded-md transition-colors bg-background hover:bg-accent focus:bg-accent group border border-input">
        <Globe className="h-[1vw] w-[1vw]" />
        <span className="text-[1vw] font-medium capitalize">
          {t(locale === 'en' ? 'english' : 'italian')}
        </span>
        <ChevronDown className="h-[1vw] w-[1vw] opacity-50 group-hover:opacity-100 transition-opacity" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-full bg-background text-foreground border border-foreground/10">
        {LOCALES.map((loc) => (
          <DropdownMenuItem 
            key={loc}
            onClick={() => handleLanguageChange(loc)}
            className={`flex items-center gap-2 cursor-pointer font-medium text-[1vw]`}
          >
            {/* {locale === loc && (
              <span className="absolute left-[1vw] flex h-[1vw] w-[1vw]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[1vw] w-[1vw] bg-primary"></span>
              </span>
            )} */}
            <span>
              {t(loc === 'en' ? 'english' : 'italian')}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;