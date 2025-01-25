'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import modern from "@/public/Kitchen/HIGH-TECH/high-tech-12-2.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function KitchensTranslate() {

    const { t } = useTranslation('contact-materials-privacy');
    // const FurnitureDetails = dynamic(
    //     () => import('@/components/details/FurnitureDetails'),
    //     { ssr: false }
    // )
    return (
        <I18nProvider>
            <FurnitureDetails
                image={modern}
                title={t('products-kitchens-title')}
                description={t('products-kitchens-description')}/>
        </I18nProvider>
    );
}