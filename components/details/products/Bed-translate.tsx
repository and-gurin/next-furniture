'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import classic from "@/public/Wardrobe/bedroom-3.jpg"
import React from "react";
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function BedTranslate() {

    const { t } = useTranslation('contact-materials-privacy');
    // const FurnitureDetails = dynamic(
    //     () => import('@/components/details/FurnitureDetails'),
    //     { ssr: false }
    // )
    return (
        <I18nProvider>
            <FurnitureDetails
                image={classic}
                title={t('products-bed-title')}
                description={t('products-bed-description')}/>
        </I18nProvider>
    );
}