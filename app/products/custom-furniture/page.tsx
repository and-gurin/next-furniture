import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import classic from "@/public/Custom/Collage/bed-room-3.jpg"
import Stages from "@/components/stages/Stages";
import GalleryCustom from "@/components/gallery/gallery-custom/GalleryCustom";

const CustomFurniture = () => {
    return (
        <>
            <FurnitureDetails
                image={classic}
                title={'Meble na wymiar'}
                description={'Ergonomiczne i nowoczesne rozwiązania zapewniające efektywną pracę'}/>
            <GalleryCustom defaultTag={'custom'}/>
            <Stages background={'whiteSmoke'}/>
        </>
    );
};

export default CustomFurniture;