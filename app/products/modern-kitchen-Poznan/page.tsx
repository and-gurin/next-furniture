import React from 'react';
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import ModernTranslate from "@/components/details/products/Modern-translate";
import ModernTranslatePoznan from "@/components/details/products/Modern-translate-Poznan";
import FAQ from "@/components/faq/FAQ";

export const metadata: Metadata = {
    title: 'Kuchnie w nowoczesnym stylu | InHouse meble'
}

const ModernKitchen = () => {
    return (
        <>
            <ModernTranslatePoznan/>
            <GalleryKitchen defaultTag={'modern'}/>
        </>
    );
};

export default ModernKitchen;