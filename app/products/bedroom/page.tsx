import React from 'react';
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import BedTranslate from "@/components/details/products/Bed-translate";

export const metadata: Metadata = {
    title: 'Meble do zabudowy w sypialni | InHouse meble'
}
const BedroomWardrobe = () => {
    return (
        <>
            <BedTranslate/>
            <GalleryWardrobe defaultTag={'bedroom'}/>
        </>
    );
};

export default BedroomWardrobe;