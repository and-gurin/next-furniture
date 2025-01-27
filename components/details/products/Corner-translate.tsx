'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import classic from "@/public/Wardrobe/corner-1-2.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function CornerTranslate() {

    const { t } = useTranslation('common');
    // const FurnitureDetails = dynamic(
    //     () => import('@/components/details/FurnitureDetails'),
    //     { ssr: false }
    // )
    return (
        <I18nProvider>
            <FurnitureDetails
                image={classic}
                title={t('products-corner-title')}
                description={t('products-corner-description')}/>
        </I18nProvider>
    );
}