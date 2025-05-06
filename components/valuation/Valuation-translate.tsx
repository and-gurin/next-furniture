import I18nProvider from '@/components/I18nProvider/I18nProvider';
import Valuation from './Valuation';
import FAQ from "@/components/faq/FAQ";
import React from "react";

export default function ValuationTranslate() {

    return (
        <I18nProvider>
            <Valuation/>
            <FAQ/>
        </I18nProvider>
    );
}