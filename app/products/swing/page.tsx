import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Wardrobe/Collage/Swing-wardrobe-11.jpg"
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";

const SwingWardrobe = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Szafy z drzwiami skrzydłowymi'}
                description={'Najpopularniejszy rodzaj szafek. Przestronne i wygodne. ' +
                    'Zajmą swoje godne miejsce w każdym pomieszczeniu i będą wyglądać świetnie.'}/>
            <GalleryWardrobe defaultTag={'swing'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default SwingWardrobe;