import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import ht from "@/public/Kitchen/Nobilia/nobilia-5.jpg"
import Stages from "@/components/stages/Stages";
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Niemieckie kuchnie Nobilia | InHouse meble'
}
const GermanKitchen = () => {
    return (
        <>
            <FurnitureDetails
                image={ht}
                title={'Niemieckie kuchnie Nobilia'}
                description={'Niemiecka jakość może być niedroga. Szeroka gama modeli i materiałów pozwala' +
                    ' stworzyć kuchnię, która idealnie odpowiada Twoim indywidualnym potrzebom i preferencjom. ' +
                    'Dzięki Nobilii otrzymujesz nie tylko kuchnię, ale starannie zaprojektowaną przestrzeń, ' +
                    'która stanie się sercem Twojego domu.'}/>
            <GalleryKitchen defaultTag={'high'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default GermanKitchen;