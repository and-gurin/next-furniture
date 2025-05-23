'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import classic from "@/public/Wardrobe/dressing-3-1.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function WardrobesTranslate() {

    const { t } = useTranslation('common');

    return (
        <I18nProvider>
            <
                FurnitureDetails
                image={classic}
                title={t('products-wardrobes-title')}
                description={t('products-wardrobes-description')}
                descriptionAdditional={t('products-common-description')}
            />
        </I18nProvider>
    );
}