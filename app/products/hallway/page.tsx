import React from 'react';
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import HallwayTranslate from "@/components/details/products/Hallway-translate";

export const metadata: Metadata = {
    title: 'Szafa do przedpokoju na wymiar | InHouse meble'
}

const HallwayWardrobe = () => {
    return (
        <>
            <HallwayTranslate/>
            <GalleryWardrobe defaultTag={'hallway'}/>
        </>
    );
};

export default HallwayWardrobe;