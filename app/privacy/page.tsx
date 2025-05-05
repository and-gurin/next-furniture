import {Metadata} from "next";
import PrivacyPolicyTranslate from "@/components/privacy-policy/Privacy-policy-translate";

export const metadata: Metadata = {
    title: 'Privacy Policy | InHouse meble'
}
export default function PrivacyPolicy() {

    return (
        <>
            <PrivacyPolicyTranslate/>
        </>
    )
}