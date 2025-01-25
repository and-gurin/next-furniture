import React from 'react';
import Gallery from "@/components/gallery/Gallery";
import bath1 from "@/public/Custom/Bath-room/bath-1.jpg";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

const images = [
    {id: '1', src: bath1, tag: 'bath'},


]

const GalleryMaterials = ({defaultTag}: {defaultTag: string}) => {
    return (
        <I18nProvider>
            <Gallery
                images={images}
                defaultTag={defaultTag}
            />
        </I18nProvider>
    );
};

export default GalleryMaterials;