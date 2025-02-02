'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import classic from "@/public/Wardrobe/Collage/Wardrobe-8.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function WardrobeTranslate() {

    const { t } = useTranslation('common');

    return (
        <I18nProvider>
            <FurnitureDetails
                image={classic}
                title={t('products-wardrobe-title')}
                description={t('products-wardrobe-description')}/>
        </I18nProvider>
    );
}