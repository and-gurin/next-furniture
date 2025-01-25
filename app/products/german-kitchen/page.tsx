import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import GermanTranslate from "@/components/details/products/German-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Kuchnie niemieckie nobilia | InHouse meble'
}
const GermanKitchen = () => {
    return (
        <>
            <GermanTranslate/>
            <GalleryKitchen defaultTag={'high'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default GermanKitchen;