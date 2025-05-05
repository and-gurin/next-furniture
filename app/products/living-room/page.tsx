import React from 'react';
import GalleryCustom from "@/components/gallery/gallery-custom/GalleryCustom";
import {Metadata} from "next";
import LivingTranslate from "@/components/details/products/Living-translate";

export const metadata: Metadata = {
    title: 'Meble do salonu na wymiar | InHouse meble'
}

const LivingRoom = () => {
    return (
        <>
            <LivingTranslate/>
            <GalleryCustom defaultTag={'living'}/>
        </>
    );
};

export default LivingRoom;