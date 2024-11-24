import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Wardrobe/niche-6.jpg"
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Szafy Wnekowe | InHouse meble'
}
const NicheWardrobe = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Zabudowa wnęki na wymiar'}
                description={'Czy masz wolną niszę? Zróbmy tam szafę. W końcu miejsce do przechowywania ' +
                    'nigdy nie jest zbędne.'}/>
            <GalleryWardrobe defaultTag={'niche'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default NicheWardrobe;