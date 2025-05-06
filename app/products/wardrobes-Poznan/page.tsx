import React from 'react';
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import WardrobesPoznanTranslate from "@/components/details/products/Wardrobes-Poznan-translate";

export const metadata: Metadata = {
    title: 'Szafy na wymiar | InHouse meble'
}

const WardrobesPoznan = () => {
    return (
        <>
            <WardrobesPoznanTranslate/>
            <GalleryWardrobe defaultTag={'all'}/>
        </>
    );
};

export default WardrobesPoznan;