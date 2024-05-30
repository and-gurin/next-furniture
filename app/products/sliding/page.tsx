import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Wardrobe/Collage/Sliding-wardrobe-3.jpg"
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Szafy z drzwiami przesuwnymi | InHouse meble'
}
const SlidingWardrobe = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Szafy z drzwiami przesuwnymi'}
                description={'Jaka jest zaleta szafy z drzwiami przesuwnymi? ' +
                    'Nie zajmie dodatkowej przestrzeni, drzwi po prostu przesuwają się na bok, ' +
                    'nigdy nie zwisają i będą wyglądać estetycznie. ' +
                    'Niestety takie szafki tracą ostatnio popularność.'}/>
            <GalleryWardrobe defaultTag={'sliding'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default SlidingWardrobe;