import I18nProvider from '@/components/I18nProvider/I18nProvider';
import Privacy from "@/components/privacy-policy/Privacy-policy";
import FAQ from "@/components/faq/FAQ";
import React from "react";

export default function PrivacyPolicyTranslate() {
    return (
        <I18nProvider>
            <Privacy/>
            <FAQ/>
        </I18nProvider>
    );
}