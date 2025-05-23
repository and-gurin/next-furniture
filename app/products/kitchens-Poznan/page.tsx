import React from 'react';
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import KitchensPoznanTranslate from "@/components/details/products/Kitchens-Poznan-translate";

export const metadata: Metadata = {
    title: 'Kuchnie na wymiar | InHouse meble'
}

const KitchensPoznan = () => {
    return (
        <>
            <KitchensPoznanTranslate/>
            <GalleryKitchen defaultTag={'all'}/>
        </>
    );
};

export default KitchensPoznan;