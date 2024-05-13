import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import ht from "@/public/Kitchen/HIGH-TECH/high-tech-6.jpg"
import Stages from "@/components/stages/Stages";
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";

const HighTechKitchen = () => {
    return (
        <>
            <FurnitureDetails
                image={ht}
                title={'Kuchnie w stylu High Tech'}
                description={'Kuchnie jutra już dziś! Nasze kuchnie w stylu ' +
                    'High Tech to innowacyjne rozwiązania i nowoczesne wzornictwo ' +
                    'stworzone z myślą o tych, ' +
                    'którzy nadążają za duchem czasu i cenią sobie komfort.'}/>
            <GalleryKitchen/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default HighTechKitchen;