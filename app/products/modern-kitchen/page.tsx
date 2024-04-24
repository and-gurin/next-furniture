import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import modern from "@/public/Kitchen/Modern/Modern-9-1.jpg"
import Stages from "@/components/stages/Stages";
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";

const ModernKitchen = () => {
    return (
        <>
            <FurnitureDetails
                image={modern}
                title={'Kuchnie w nowoczesnym stylu'}
                description={'Eleganckie linie, funkcjonalność i ' +
                    'odważne rozwiązania w każdym szczególe to kuchnie ' +
                    'w stylu secesyjnym.'}/>
            <GalleryKitchen/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default ModernKitchen;