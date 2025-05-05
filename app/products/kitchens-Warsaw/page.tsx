import React from 'react';
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";
import I18nProvider from "@/components/I18nProvider/I18nProvider";
import Manufacturing from "@/components/production/Manufacturing";
import KitchensWarsawTranslate from "@/components/details/products/Kitchens-Warsaw-translate";

export const metadata: Metadata = {
    title: 'Kuchnie na wymiar | InHouse meble'
}

const KitchensWarsaw = () => {
    return (
        <>
            <KitchensWarsawTranslate/>
            <GalleryKitchen defaultTag={'all'}/>
            <I18nProvider>
                <Manufacturing/>
            </I18nProvider>
        </>
    );
};

export default KitchensWarsaw;