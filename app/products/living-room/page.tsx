import React from 'react';
import Stages from "@/components/stages/Stages";
import GalleryCustom from "@/components/gallery/gallery-custom/GalleryCustom";
import {Metadata} from "next";
import LivingTranslate from "@/components/details/products/Living-translate";
import I18nProvider from '@/components/I18nProvider/I18nProvider';

export const metadata: Metadata = {
    title: 'Meble do salonu na wymiar | InHouse meble'
}

const LivingRoom = () => {
    return (
        <>
            <LivingTranslate/>
            <GalleryCustom defaultTag={'living'}/>
            <I18nProvider>
                <Stages background={'whiteSmoke'}/>
            </I18nProvider>
        </>
    );
};

export default LivingRoom;