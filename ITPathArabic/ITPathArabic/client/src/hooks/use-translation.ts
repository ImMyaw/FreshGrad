import { useLanguage } from '@/contexts/language-context';
import { translations, TranslationKey } from '@/lib/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.ar[key] || key;
  };

  return { t, language };
};