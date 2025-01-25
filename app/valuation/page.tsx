import "@/styles/wrapper.scss"
import Stages from "@/components/stages/Stages";
import {Metadata} from "next";
import ValuationTranslate from "@/components/valuation/Valuation-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Wycena | InHouse meble'
}
export default function ValuationPage () {

    return (
        <>
            <ValuationTranslate/>
            <I18nProvider>
                <Stages/>
            </I18nProvider>
        </>
    )
}