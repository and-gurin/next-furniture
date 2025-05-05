import "@/styles/wrapper.scss"
import {Metadata} from "next";
import React from "react";
import MaterialsCollection from "@/components/materials/Materials-collection";
import MaterialsTranslate from "@/components/details/Materials-translate";

export const metadata: Metadata = {
    title: 'Materiały | InHouse meble'
}
export default function Materials() {

    return (
        <>
            <MaterialsTranslate/>
            <MaterialsCollection/>
        </>
    )
}