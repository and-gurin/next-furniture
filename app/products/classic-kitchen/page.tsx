import React from 'react';
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import ClassicTranslate from "@/components/details/products/Classic-translate";

export const metadata: Metadata = {
    title: 'Kuchnie w stylu klasycznym | InHouse meble'
}

const ClassicKitchen = () => {
    return (
        <>
            <ClassicTranslate/>
            <GalleryKitchen defaultTag={'classic'}/>
        </>
    );
};

export default ClassicKitchen;