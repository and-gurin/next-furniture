import React from 'react';
import GalleryCustom from "@/components/gallery/gallery-custom/GalleryCustom";
import {Metadata} from "next";
import CustomTranslate from "@/components/details/products/Custom-translate";

export const metadata: Metadata = {
    title: 'Meble na wymiar | InHouse meble'
}

const CustomFurniture = () => {
    return (
        <>
            <CustomTranslate/>
            <GalleryCustom defaultTag={'custom'}/>
        </>
    );
};

export default CustomFurniture;