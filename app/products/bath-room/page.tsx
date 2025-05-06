import React from 'react';
import GalleryCustom from "@/components/gallery/gallery-custom/GalleryCustom";
import {Metadata} from "next";
import BathTranslate from "@/components/details/products/Bath-translate";
import FAQ from "@/components/faq/FAQ";

export const metadata: Metadata = {
    title: 'Zabudowa łazienkowa | InHouse meble'
}

const BathRoom = () => {

    return (
        <>
            <BathTranslate/>
            <FAQ/>
            <GalleryCustom defaultTag={'bath'}/>
        </>
    );
};

export default BathRoom;