import { LOCALES } from "@/lib/i18n/constants";
import SanityLocalizedContent from "@/components/i18n/SanityLocalizedContent";
import { useTranslations } from "@/lib/i18n/useTranslations";

type ContactPageProps = {
  params: {
    locale: string;
  };
};

/**
 * Contact Page Component
 * Example of a contact page with localized content
 */
export default async function ContactPage({ params: { locale } }: ContactPageProps) {
  // Use server-side translations
  const t = await useTranslations(locale);

  return (
      <div className="prose dark:prose-invert max-w-none">
        <SanityLocalizedContent 
          fallbackTitle={t('contact')}
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('contactForm')}</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-border rounded-md bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-border rounded-md bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border border-border rounded-md bg-background"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md"
              >
                {t('submit')}
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('contactInfo')}</h2>
            <div className="space-y-4">
              <p>
                <strong>Email:</strong> contact@example.com
              </p>
              <p>
                <strong>{t('phone')}:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>{t('address')}:</strong><br />
                123 Main Street<br />
                Suite 456<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

/**
 * Generate static params for supported locales
 * This function enables static generation for all supported locales
 */
export async function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
} 