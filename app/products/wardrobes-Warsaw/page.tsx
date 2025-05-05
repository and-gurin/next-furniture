import React from 'react';
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import WardrobesTranslate from "@/components/details/products/Wardrobes-translate";

export const metadata: Metadata = {
    title: 'Szafy na wymiar | InHouse meble'
}

const Wardrobes = () => {
    return (
        <>
            <WardrobesTranslate/>
            <GalleryWardrobe defaultTag={'all'}/>
        </>
    );
};

export default Wardrobes;