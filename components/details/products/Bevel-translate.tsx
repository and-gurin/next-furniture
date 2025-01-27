'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import classic from "@/public/Wardrobe/bevel-1.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function BevelTranslate() {

    const { t } = useTranslation('common');
    // const FurnitureDetails = dynamic(
    //     () => import('@/components/details/FurnitureDetails'),
    //     { ssr: false }
    // )
    return (
        <I18nProvider>
            <FurnitureDetails
                image={classic}
                title={t('products-bevel-title')}
                description={t('products-bevel-description')}/>
        </I18nProvider>
    );
}