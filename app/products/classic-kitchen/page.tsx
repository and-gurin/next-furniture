import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Kitchen/Classic/Classic-3.jpg"
import Stages from "@/components/stages/Stages";
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Kuchnie w stylu klasycznym | InHouse meble'
}

const ClassicKitchen = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Kuchnie w stylu klasycznym'}
                description={'Klasyka, która nigdy nie wychodzi z mody. ' +
                    'Witamy w świecie wspaniałości i' +
                    'wyrafinowania, w którym piękno żyje w każdym szczególe.'}/>
            <GalleryKitchen defaultTag={'classic'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default ClassicKitchen;