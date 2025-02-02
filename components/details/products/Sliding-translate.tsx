'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import classic from "@/public/Wardrobe/Collage/Sliding-wardrobe-3.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function SlidingTranslate() {

    const { t } = useTranslation('common');


    return (
        <I18nProvider>
            <FurnitureDetails
                image={classic}
                title={t('products-sliding-title')}
                description={t('products-sliding-description')}/>
        </I18nProvider>
    );
}