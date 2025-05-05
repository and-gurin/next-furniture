'use client';

import React, { ReactNode } from 'react';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import contactRu from "@/public/locales/ru/contact-materials-privacy.json";
import cookieRu from "@/public/locales/ru/cookie.json";
import galleryRu from "@/public/locales/ru/gallery-header-stages.json";
import en from "@/public/locales/en/contact-materials-privacy.json";
import cookieEn from "@/public/locales/en/cookie.json";
import galleryEn from "@/public/locales/en/gallery-header-stages.json";
import pl from "@/public/locales/pl/contact-materials-privacy.json";
import cookiePl from "@/public/locales/pl/cookie.json";
import galleryPl from "@/public/locales/pl/gallery-header-stages.json";

type I18nProviderProps = {
    children: ReactNode;
};

const resources = {
    ru: { common: contactRu, cookie: cookieRu, gallery: galleryRu },
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
export default function I18nProvider({ children }: I18nProviderProps) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

