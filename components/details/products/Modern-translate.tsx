'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import modern from "@/public/hero/hero-block-11.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';
import FAQ from "@/components/faq/FAQ";

export default function ModernTranslate() {

    const { t } = useTranslation('common');

    return (
        <I18nProvider>
            <
                FurnitureDetails
                image={modern}
                title={t('products-modern-title')}
                description={t('products-modern-description')}
                descriptionAdditional={t('products-common-description')}
            />
            <FAQ/>
        </I18nProvider>
    );
}