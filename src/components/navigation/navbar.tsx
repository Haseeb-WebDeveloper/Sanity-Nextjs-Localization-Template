"use client";

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/lib/i18n/context';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../LanguageSwitcher';


const MainNav: React.FC = () => {
  const { locale, t } = useLocale();
  const pathname = usePathname();
  
  // Define navigation items
  const navItems = [
    { key: 'home', href: `/${locale}`, label: t('home') },
    { key: 'about', href: `/${locale}/about`, label: t('about') },
  ];

  return (
    <nav className="fixed top-0 left-0 bg-background bg-opacity-50 backdrop-blur-sm border-b-[0.1px] border-border w-full px-[2vw] md:px-[3vw] py-[1vw] md:py-[1.5vw] mb-8">
      <div className="flex justify-between items-center">
        <Link 
          href={`/${locale}`} 
          className="text-[2vw] font-bold"
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
                  className={`transition-colors text-[1.5vw] font-medium`}
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