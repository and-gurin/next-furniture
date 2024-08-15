import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Wardrobe/corner-1-2.jpg"
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Szafy narożne | InHouse meble'
}
const CornerWardrobe = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Szafy narożne'}
                description={'Aby zamówić szafkę narożną, musisz być naprawdę odważną osobą. ' +
                    'Nasze szafki narożne zapewnią maksymalną wygodę i dużo miejsca do ' +
                    'przechowywania w każdym wnętrzu.'}/>
            <GalleryWardrobe defaultTag={'corner'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default CornerWardrobe;