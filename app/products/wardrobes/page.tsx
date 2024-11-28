import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Wardrobe/Collage/Sliding-wardrobe-3.jpg"
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Szafy na wymiar | InHouse meble'
}
const Wardrobes = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Szafy na wymiar'}
                description={'Witamy w świecie innowacyjnego przechowywania! Nasze szafy zapewnią Ci ' +
                    'wygodę przechowywania i elegancki wygląd, idealny do każdego wnętrza.'}/>
            <GalleryWardrobe defaultTag={'all'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default Wardrobes;