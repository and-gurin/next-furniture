import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import KitchensTranslate from "@/components/details/products/Kitchens-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Kuchnie na wymiar | InHouse meble'
}

const Kitchens = () => {
    return (
        <>
            <KitchensTranslate/>
            <GalleryKitchen defaultTag={'all'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default Kitchens;