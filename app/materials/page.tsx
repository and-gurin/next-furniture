import "@/styles/wrapper.scss"
import Stages from "@/components/stages/Stages";
import {Metadata} from "next";
import classic from "@/public/Materials/materials.png";
import FurnitureDetails from "@/components/details/FurnitureDetails";
import React from "react";
import MaterialsCollection from "@/components/materials/Materials-collection";

export const metadata: Metadata = {
    title: 'Materiały | InHouse meble'
}
export default function Materials() {

    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Materiały'}
                description={'Mnogość wzorów oraz komponentów najwyższej jakości'}/>
            <MaterialsCollection/>
            <Stages background={'whiteSmoke'}/>
        </>

    )
}