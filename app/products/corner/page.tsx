import React from 'react';
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import CornerTranslate from "@/components/details/products/Corner-translate";


export const metadata: Metadata = {
    title: 'Szafa narożna na wymiar | InHouse meble'
}
const CornerWardrobe = () => {
    return (
        <>
            <CornerTranslate/>
            <GalleryWardrobe defaultTag={'corner'}/>
        </>
    );
};

export default CornerWardrobe;