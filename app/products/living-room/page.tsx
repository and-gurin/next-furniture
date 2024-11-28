import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Custom/Collage/living-room-1.jpg"
import Stages from "@/components/stages/Stages";
import GalleryCustom from "@/components/gallery/gallery-custom/GalleryCustom";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Meble do salonu na wymiar | InHouse meble'
}

const LivingRoom = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Meble do salonu na wymiar'}
                description={'Meble, które tworzą atmosferę przytulności i spokoju dla Twojego pełnego wypoczynku'}/>
            <GalleryCustom defaultTag={'living'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default LivingRoom;