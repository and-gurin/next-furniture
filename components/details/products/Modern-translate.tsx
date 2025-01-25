'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import modern from "@/public/Kitchen/Modern/Modern-9-1.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function ModernTranslate() {

    const { t } = useTranslation('contact-materials-privacy');
    // const FurnitureDetails = dynamic(
    //     () => import('@/components/details/FurnitureDetails'),
    //     { ssr: false }
    // )
    return (
        <I18nProvider>
            <FurnitureDetails
                image={modern}
                title={t('products-modern-title')}
                description={t('products-modern-description')}/>
        </I18nProvider>
    );
}