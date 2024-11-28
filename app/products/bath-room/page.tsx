import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Custom/Collage/bath-4.jpg"
import Stages from "@/components/stages/Stages";
import GalleryCustom from "@/components/gallery/gallery-custom/GalleryCustom";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Zabudowa łazienkowa | InHouse meble'
}

const BathRoom = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Zabudowa łazienkowa'}
                description={'Indywidualne rozwiązania dla Twojej łazienki! ' +
                    'Nasze meble łączą elegancki design i praktyczność, ' +
                    'tworząc przytulną i funkcjonalną przestrzeń.'}/>
            <GalleryCustom defaultTag={'bath'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default BathRoom;