import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Wardrobe/bevel-1.jpg"
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Zabudowa pod skosem | InHouse meble'
}

const HallwayWardrobe = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Zabudowa pod skosem (na poddaszu)'}
                description={'Stwórz idealną przestrzeń do przechowywania dzięki naszym szafkom, ' +
                    'w których każdy element jest przemyślany w najdrobniejszych szczegółach ' +
                    'dla Twojej wygody i stylu.'}/>
            <GalleryWardrobe defaultTag={'bevel'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default HallwayWardrobe;