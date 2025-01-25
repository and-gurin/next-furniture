import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import SlidingTranslate from "@/components/details/products/Sliding-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Szafy z drzwiami przesuwnymi | InHouse meble'
}
const SlidingWardrobe = () => {
    return (
        <>
            <SlidingTranslate/>
            <GalleryWardrobe defaultTag={'sliding'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default SlidingWardrobe;