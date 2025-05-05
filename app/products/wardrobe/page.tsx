import React from 'react';
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import WardrobeTranslate from "@/components/details/products/Wardrobe-translate";

export const metadata: Metadata = {
    title: 'Garderoby  na wymiar | InHouse meble'
}

const Wardrobe = () => {
    return (
        <>
            <WardrobeTranslate/>
            <GalleryWardrobe defaultTag={'wardrobe'}/>
        </>
    );
};

export default Wardrobe;