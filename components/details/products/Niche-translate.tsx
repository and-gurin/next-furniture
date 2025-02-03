'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import classic from "@/public/Wardrobe/niche-6.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function NicheTranslate() {

    const { t } = useTranslation('common');


    return (
        <I18nProvider>
            <
                FurnitureDetails
                image={classic}
                title={t('products-niche-title')}
                description={t('products-niche-description')}
                descriptionAdditional={t('products-common-description')}
            />
        </I18nProvider>
    );
}