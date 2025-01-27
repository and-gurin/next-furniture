'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import ht from "@/public/Kitchen/Nobilia/nobilia-5.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function GermanTranslate() {

    const { t } = useTranslation('common');
    // const FurnitureDetails = dynamic(
    //     () => import('@/components/details/FurnitureDetails'),
    //     { ssr: false }
    // )
    return (
        <I18nProvider>
            <FurnitureDetails
                image={ht}
                title={t('products-german-title')}
                description={t('products-german-description')}/>
        </I18nProvider>
    );
}