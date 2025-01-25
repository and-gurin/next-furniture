'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import classic from "@/public/Custom/Collage/bed-room-3.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function CustomTranslate() {

    const { t } = useTranslation('contact-materials-privacy');
    // const FurnitureDetails = dynamic(
    //     () => import('@/components/details/FurnitureDetails'),
    //     { ssr: false }
    // )
    return (
        <I18nProvider>
            <FurnitureDetails
                image={classic}
                title={t('products-custom-title')}
                description={t('products-custom-description')}/>
        </I18nProvider>
    );
}