import React from 'react';
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import ModernTranslate from "@/components/details/products/Modern-translate";

export const metadata: Metadata = {
    title: 'Kuchnie w nowoczesnym stylu | InHouse meble'
}

const ModernKitchen = () => {
    return (
        <>
            <ModernTranslate/>
            <GalleryKitchen defaultTag={'modern'}/>
        </>
    );
};

export default ModernKitchen;