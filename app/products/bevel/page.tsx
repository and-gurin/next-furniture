import React from 'react';
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import BevelTranslate from "@/components/details/products/Bevel-translate";

export const metadata: Metadata = {
    title: 'Zabudowa pod skosem | InHouse meble'
}

const BevelWardrobe = () => {
    return (
        <>
            <BevelTranslate/>
            <GalleryWardrobe defaultTag={'bevel'}/>
        </>
    );
};

export default BevelWardrobe;