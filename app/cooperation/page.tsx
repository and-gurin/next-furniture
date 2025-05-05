import "@/styles/wrapper.scss"
import {Metadata} from "next";
import Cooperation from "@/components/cooperation/Cooperation";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Cooperation | InHouse meble'
}

export default function CooperationPage() {

    return (
        <>
            <I18nProvider>
                <Cooperation/>
            </I18nProvider>
        </>
    )
}