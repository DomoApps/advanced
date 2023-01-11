import languages from '../public/translations';

declare global {
  interface Window {
    DAPageLocale: string;
    DAUserLocale: string;
    DATranslations: typeof languages.en;
  }
}
