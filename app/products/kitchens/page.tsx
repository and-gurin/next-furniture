import React from 'react';
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import KitchensTranslate from "@/components/details/products/Kitchens-translate";

export const metadata: Metadata = {
    title: 'Kuchnie na wymiar | InHouse meble'
}

const Kitchens = () => {
    return (
        <>
            <KitchensTranslate/>
            <GalleryKitchen defaultTag={'all'}/>
        </>
    );
};

export default Kitchens;