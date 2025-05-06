import React from 'react';
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import WardrobesWarsawTranslate from "@/components/details/products/Wardrobes-Warsaw-translate";

export const metadata: Metadata = {
    title: 'Szafy na wymiar | InHouse meble'
}

const WardrobesWarsaw = () => {
    return (
        <>
            <WardrobesWarsawTranslate/>
            <GalleryWardrobe defaultTag={'all'}/>
        </>
    );
};

export default WardrobesWarsaw;