import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryCustom from "@/components/gallery/gallery-custom/GalleryCustom";
import {Metadata} from "next";
import CustomTranslate from "@/components/details/products/Custom-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Meble na wymiar | InHouse meble'
}

const CustomFurniture = () => {
    return (
        <>
            <CustomTranslate/>
            <GalleryCustom defaultTag={'custom'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default CustomFurniture;