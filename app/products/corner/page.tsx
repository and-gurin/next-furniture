import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";
import CornerTranslate from "@/components/details/products/Corner-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Szafa narożna na wymiar | InHouse meble'
}
const CornerWardrobe = () => {
    return (
        <>
            <CornerTranslate/>
            <GalleryWardrobe defaultTag={'corner'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default CornerWardrobe;