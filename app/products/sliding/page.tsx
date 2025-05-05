import React from 'react';
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import SlidingTranslate from "@/components/details/products/Sliding-translate";

export const metadata: Metadata = {
    title: 'Szafy z drzwiami przesuwnymi | InHouse meble'
}

const SlidingWardrobe = () => {
    return (
        <>
            <SlidingTranslate/>
            <GalleryWardrobe defaultTag={'sliding'}/>
        </>
    );
};

export default SlidingWardrobe;