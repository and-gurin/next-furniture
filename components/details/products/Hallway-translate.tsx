'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import classic from "@/public/Wardrobe/Hallway-2-1.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function HallwayTranslate() {

    const { t } = useTranslation('common');
    return (
        <I18nProvider>
            <FurnitureDetails
                image={classic}
                title={t('products-hallway-title')}
                description={t('products-hallway-description')}/>
        </I18nProvider>
    );
}