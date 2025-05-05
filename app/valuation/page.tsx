import "@/styles/wrapper.scss"
import {Metadata} from "next";
import ValuationTranslate from "@/components/valuation/Valuation-translate";

export const metadata: Metadata = {
    title: 'Wycena | InHouse meble'
}

export default function ValuationPage () {

    return (
        <>
            <ValuationTranslate/>
        </>
    )
}