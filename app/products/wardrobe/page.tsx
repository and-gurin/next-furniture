import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import WardrobeTranslate from "@/components/details/products/Wardrobe-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Garderoby  na wymiar | InHouse meble'
}
const Wardrobe = () => {
    return (
        <>
            <WardrobeTranslate/>
            <GalleryWardrobe defaultTag={'wardrobe'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default Wardrobe;