'use client';

import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

type I18nProviderProps = {
    children: ReactNode;
};

export default function I18nProvider({ children }: I18nProviderProps) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

