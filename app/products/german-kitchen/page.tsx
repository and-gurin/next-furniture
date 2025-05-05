import React from 'react';
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import GermanTranslate from "@/components/details/products/German-translate";

export const metadata: Metadata = {
    title: 'Kuchnie niemieckie nobilia | InHouse meble'
}

const GermanKitchen = () => {
    return (
        <>
            <GermanTranslate/>
            <GalleryKitchen defaultTag={'high'}/>
        </>
    );
};

export default GermanKitchen;