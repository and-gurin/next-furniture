import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryCustom from "@/components/gallery/gallery-custom/GalleryCustom";
import {Metadata} from "next";
import BathTranslate from "@/components/details/products/Bath-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Zabudowa łazienkowa | InHouse meble'
}

const BathRoom = () => {

    return (
        <>
            <BathTranslate/>
            <GalleryCustom defaultTag={'bath'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default BathRoom;