import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import be from '@/public/locales/be/contact-materials-privacy.json';
import en from '@/public/locales/en/contact-materials-privacy.json';
import pl from '@/public/locales/pl/contact-materials-privacy.json';
import cookieBe from '@/public/locales/be/cookie.json';
import cookieEn from '@/public/locales/en/cookie.json';
import cookiePl from '@/public/locales/pl/cookie.json';
import galleryBe from '@/public/locales/be/gallery-header-stages.json';
import galleryEn from '@/public/locales/en/gallery-header-stages.json';
import galleryPl from '@/public/locales/pl/gallery-header-stages.json';

const resources = {
    be: { common: be, cookie: cookieBe, gallery: galleryBe },
    en: { common: en, cookie: cookieEn, gallery: galleryEn },
    pl: { common: pl, cookie: cookiePl, gallery: galleryPl },
};

i18n
    .use(initReactI18next)
    .init({
        resources, // Указываем ресурсы
        lng: 'pl', // Язык по умолчанию
        fallbackLng: 'pl',
        interpolation: {
            escapeValue: false, // React уже экранирует HTML
        },
        ns: ['common', 'cookie', 'gallery'], // Пространства имён
        defaultNS: 'common', // Пространство имён по умолчанию
    });

export default i18n;