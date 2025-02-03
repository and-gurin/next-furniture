'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import classic from "@/public/Kitchen/Classic/Classic-3.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function ClassicTranslate() {

    const { t } = useTranslation('common');

    return (
        <I18nProvider>
            <
                FurnitureDetails
                image={classic}
                title={t('products-classic-title')}
                description={t('products-classic-description')}
                descriptionAdditional={t('products-common-description')}
            />
        </I18nProvider>
    );
}