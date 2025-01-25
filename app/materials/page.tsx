import "@/styles/wrapper.scss"
import Stages from "@/components/stages/Stages";
import {Metadata} from "next";
import React from "react";
import MaterialsCollection from "@/components/materials/Materials-collection";
import MaterialsTranslate from "@/components/details/Materials-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Materiały | InHouse meble'
}
export default function Materials() {

    return (
        <>
            <MaterialsTranslate/>
            <MaterialsCollection/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>

    )
}