import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Wardrobe/Hallway-2-1.jpg"
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Szafa do przedpokoju na wymiar | InHouse meble'
}

const HallwayWardrobe = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Szafa do przedpokoju na wymiar'}
                description={'Stwórz idealną przestrzeń do przechowywania dzięki naszym szafkom przedpokojowym, ' +
                    'w których każdy element jest przemyślany w najdrobniejszych szczegółach ' +
                    'dla Twojej wygody i stylu.'}/>
            <GalleryWardrobe defaultTag={'hallway'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default HallwayWardrobe;