import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import BedTranslate from "@/components/details/products/Bed-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Meble do zabudowy w sypialni | InHouse meble'
}
const BedroomWardrobe = () => {
    return (
        <>
            <BedTranslate/>
            <GalleryWardrobe defaultTag={'bedroom'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>

        </>
    );
};

export default BedroomWardrobe;