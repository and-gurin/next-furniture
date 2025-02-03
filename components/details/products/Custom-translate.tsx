'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import React from "react";
import classic from "@/public/Custom/Living-room/living-room-6.jpg"
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function CustomTranslate() {

    const { t } = useTranslation('common');

    return (
        <I18nProvider>
            <
                FurnitureDetails
                image={classic}
                title={t('products-custom-title')}
                description={t('products-custom-description')}
                descriptionAdditional={t('products-common-description')}
            />
        </I18nProvider>
    );
}