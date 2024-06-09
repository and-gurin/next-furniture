import React from 'react';
import Gallery from "@/components/gallery/Gallery";
import bath1 from "@/public/Custom/Bath-room/bath-1.jpg";

const images = [
    {id: '1', src: bath1, tag: 'bath'},


]

const GalleryMaterials = ({defaultTag}: {defaultTag: string}) => {
    return (
        <Gallery
            images={images}
            title={''}
            defaultTag={defaultTag}
        />
    );
};

export default GalleryMaterials;