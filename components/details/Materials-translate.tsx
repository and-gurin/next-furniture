'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import classic from "@/public/Materials/materials.png";
import React from "react";
import {useTranslation} from "react-i18next";
import FurnitureDetails from './FurnitureDetails';

export default function MaterialsTranslate() {

    const { t } = useTranslation('common');

    return (
        <I18nProvider>
            <FurnitureDetails
                image={classic}
                title={t('materials-title')}
                description={t('materials-description')}/>
        </I18nProvider>
    );
}