'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import modern from "@/public/Kitchen/HIGH-TECH/high-tech-9-2.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function KitchensTranslate() {

    const { t } = useTranslation('common');

    return (
        <I18nProvider>
            <
                FurnitureDetails
                image={modern}
                title={t('products-kitchens-title')}
                description={t('products-kitchens-description')}
                descriptionAdditional={t('products-common-description')}
            />
        </I18nProvider>
    );
}