import Stages from "@/components/stages/Stages";
import {Metadata} from "next";
import PrivacyPolicyTranslate from "@/components/privacy-policy/Privacy-policy-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Privacy Policy | InHouse meble'
}
export default function PrivacyPolicy() {

    return (
        <>
            <PrivacyPolicyTranslate/>
            <I18nProvider>
                <Stages/>
            </I18nProvider>
        </>
    )
}