import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import ClassicTranslate from "@/components/details/products/Classic-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Kuchnie w stylu klasycznym | InHouse meble'
}

const ClassicKitchen = () => {
    return (
        <>
            <ClassicTranslate/>
            <GalleryKitchen defaultTag={'classic'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default ClassicKitchen;