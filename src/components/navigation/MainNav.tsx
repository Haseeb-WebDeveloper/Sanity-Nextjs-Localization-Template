"use client";

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/lib/i18n/context';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../LanguageSwitcher';

/**
 * MainNav component
 * Provides site-wide navigation with localized links
 */
const MainNav: React.FC = () => {
  const { locale, t } = useLocale();
  const pathname = usePathname();
  
  // Define navigation items
  const navItems = [
    { key: 'home', href: `/${locale}`, label: t('home') },
    { key: 'about', href: `/${locale}/about`, label: t('about') },
    { key: 'contact', href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <nav className="w-full py-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href={`/${locale}`} 
          className="text-xl font-bold"
        >
          {t('title')}
        </Link>
        
        <ul className="flex gap-6">
          {navItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <li key={item.key}>
                <Link 
                  href={item.href}
                  className={`transition-colors ${
                    isActive 
                      ? 'text-foreground font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default MainNav; 