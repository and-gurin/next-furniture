'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import classic from "@/public/Custom/Bath-room/bath-16.jpg"
import React from "react";
import {useTranslation} from "react-i18next";
import FurnitureDetails from '../FurnitureDetails';

export default function BathTranslate() {

    const { t } = useTranslation('common');

    return (
        <I18nProvider>
            <
                FurnitureDetails
                image={classic}
                title={t('products-bath-title')}
                description={t('products-bath-description')}
                descriptionAdditional={t('products-common-description')}
            />
        </I18nProvider>
    );
}