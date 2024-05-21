// src/hooks/useScopedTranslation.ts
import { useEffect, useRef } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

type Locales = Record<string, Record<string, string>>;

export const useScopedTranslation = ({
  defaultLanguage = 'en',
  locales,
}: {
  defaultLanguage: string;
  locales: Locales;
}) => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      const resources = Object.keys(locales).reduce((acc, lng) => {
        acc[lng] = { translation: locales[lng] };
        return acc;
      }, {} as Record<string, { translation: Record<string, string> }>);

      Object.keys(resources).forEach((lng) => {
        if (!i18next.hasResourceBundle(lng, 'scoped')) {
          i18next.addResourceBundle(lng, 'scoped', resources[lng].translation, true, true);
        }
      });

      if (!i18next.hasResourceBundle(defaultLanguage, 'scoped')) {
        i18next.addResourceBundle(defaultLanguage, 'scoped', resources[defaultLanguage].translation, true, true);
      }

      i18next.changeLanguage(defaultLanguage);
      isInitialized.current = true;
    }
  }, [defaultLanguage, locales]);

  const { t } = useTranslation('scoped');
  return { t };
};
