import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import NicheTranslate from "@/components/details/products/Niche-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Szafy Wnekowe na wymiar | InHouse meble'
}
const NicheWardrobe = () => {
    return (
        <>
            <NicheTranslate/>
            <GalleryWardrobe defaultTag={'niche'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default NicheWardrobe;