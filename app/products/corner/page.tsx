import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Wardrobe/corner-1-2.jpg"
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Szafa narożna na wymiar | InHouse meble'
}
const CornerWardrobe = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Szafa narożna na wymiar'}
                description={'Jeżeli cenisz sobie przestrzeń, szafa narożna będzie dla ciebie idealnym rozwiązaniem'}/>
            <GalleryWardrobe defaultTag={'corner'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default CornerWardrobe;