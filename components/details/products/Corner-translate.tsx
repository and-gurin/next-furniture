'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import classic from "@/public/Wardrobe/corner-3.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function CornerTranslate() {

    const { t } = useTranslation('common');

    return (
        <I18nProvider>
            <
                FurnitureDetails
                image={classic}
                title={t('products-corner-title')}
                description={t('products-corner-description')}
                descriptionAdditional={t('products-common-description')}
            />
        </I18nProvider>
    );
}