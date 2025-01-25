import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import BevelTranslate from "@/components/details/products/Bevel-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Zabudowa pod skosem | InHouse meble'
}

const BevelWardrobe = () => {
    return (
        <>
            <BevelTranslate/>
            <GalleryWardrobe defaultTag={'bevel'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default BevelWardrobe;