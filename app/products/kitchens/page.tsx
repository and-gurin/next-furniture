import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import modern from "@/public/Kitchen/HIGH-TECH/high-tech-12-2.jpg"
import Stages from "@/components/stages/Stages";
import GalleryKitchen from "@/components/gallery/gallery-kitchen/GalleryKitchen";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Kuchnie na wymiar | InHouse meble'
}

const ModernKitchen = () => {
    return (
        <>
            <FurnitureDetails
                image={modern}
                title={'Kuchnie na wymiar'}
                description={'Nowoczesny styl, nienaganna jakość, niezrównany komfort. ' +
                    'Zanurz się w świecie innowacyjnych rozwiązań w naszych kuchniach , ' +
                    'w których design łączy się z funkcjonalnością na najwyższym poziomie.'}/>
            <GalleryKitchen defaultTag={'all'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default ModernKitchen;