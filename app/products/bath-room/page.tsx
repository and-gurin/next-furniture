import React from 'react';
import GalleryCustom from "@/components/gallery/gallery-custom/GalleryCustom";
import {Metadata} from "next";
import BathTranslate from "@/components/details/products/Bath-translate";

export const metadata: Metadata = {
    title: 'Zabudowa łazienkowa | InHouse meble'
}

const BathRoom = () => {

    return (
        <>
            <BathTranslate/>
            <GalleryCustom defaultTag={'bath'}/>
        </>
    );
};

export default BathRoom;