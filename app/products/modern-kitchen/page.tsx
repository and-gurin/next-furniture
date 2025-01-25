import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import ModernTranslate from "@/components/details/products/Modern-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: 'Kuchnie w nowoczesnym stylu | InHouse meble'
}

const ModernKitchen = () => {
    return (
        <>
            <ModernTranslate/>
            <GalleryKitchen defaultTag={'modern'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default ModernKitchen;