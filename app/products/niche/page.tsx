import React from 'react';
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import NicheTranslate from "@/components/details/products/Niche-translate";

export const metadata: Metadata = {
    title: 'Szafy Wnekowe na wymiar | InHouse meble'
}

const NicheWardrobe = () => {
    return (
        <>
            <NicheTranslate/>
            <GalleryWardrobe defaultTag={'niche'}/>
        </>
    );
};

export default NicheWardrobe;