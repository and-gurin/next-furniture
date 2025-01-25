import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import WardrobesTranslate from "@/components/details/products/Wardrobes-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Szafy na wymiar | InHouse meble'
}
const Wardrobes = () => {
    return (
        <>
            <WardrobesTranslate/>
            <GalleryWardrobe defaultTag={'all'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default Wardrobes;