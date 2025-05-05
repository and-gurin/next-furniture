'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import FormValuation from "@/components/form-valuation/FormValuation";

export default function FormTranslate() {

    return (
        <I18nProvider>
            <FormValuation />
        </I18nProvider>
    );
}