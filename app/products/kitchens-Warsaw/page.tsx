import React from 'react';
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import KitchensWarsawTranslate from "@/components/details/products/Kitchens-Warsaw-translate";

export const metadata: Metadata = {
    title: 'Kuchnie na wymiar | InHouse meble'
}

const KitchensWarsaw = () => {
    return (
        <>
            <KitchensWarsawTranslate/>
            <GalleryKitchen defaultTag={'all'}/>
        </>
    );
};

export default KitchensWarsaw;