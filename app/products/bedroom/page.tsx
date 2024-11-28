import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Wardrobe/bedroom-3.jpg"
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Meble do zabudowy w sypialni | InHouse meble'
}
const BedroomWardrobe = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Meble do zabudowy w sypialni'}
                description={'Odkryj elegancję i funkcjonalność dzięki naszym szafom w sypialni, ' +
                    'które doskonale łączą styl i praktyczność w Twojej przestrzeni.'}/>
            <GalleryWardrobe defaultTag={'bedroom'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default BedroomWardrobe;