import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Wardrobe/Collage/Wardrobe-8.jpg"
import Stages from "@/components/stages/Stages";
import GalleryWardrobe from "@/components/gallery/gallery-wardrobe/GalleryWardrobe";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Garderoby  na wymiar | InHouse meble'
}
const Wardrobe = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Garderoby na wymiar'}
                description={'Nigdy więcej nie będziesz musiał myśleć, gdzie umieścić rzeczy. ' +
                    'Twoja Garderoba jest naprawdę wygodna .'}/>
            <GalleryWardrobe defaultTag={'wardrobe'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default Wardrobe;