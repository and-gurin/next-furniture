import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import HallwayTranslate from "@/components/details/products/Hallway-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Szafa do przedpokoju na wymiar | InHouse meble'
}

const HallwayWardrobe = () => {
    return (
        <>
            <HallwayTranslate/>
            <GalleryWardrobe defaultTag={'hallway'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default HallwayWardrobe;