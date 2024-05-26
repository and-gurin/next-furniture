import React from 'react';
import Gallery from "@/components/gallery/Gallery";
import wardrobe1 from "@/public/Wardrobe/Wardrobe-1.jpg";
import wardrobe2 from "@/public/Wardrobe/Wardrobe-2.jpg";
import wardrobe4 from "@/public/Wardrobe/Wardrobe-4.jpg";
import wardrobe5 from "@/public/Wardrobe/Wardrobe-5.jpg";
import wardrobe6 from "@/public/Wardrobe/Wardrobe-6.jpg";
import wardrobe7 from "@/public/Wardrobe/Wardrobe-7.jpg";
import wardrobe8 from "@/public/Wardrobe/Wardrobe-8.jpg";
import swingWardrobe1 from "@/public/Wardrobe/Swing-wardrobe-1.jpg";
import swingWardrobe2 from "@/public/Wardrobe/Swing-wardrobe-2.jpg";
import swingWardrobe3 from "@/public/Wardrobe/Swing-wardrobe-3.jpg";
import swingWardrobe4 from "@/public/Wardrobe/Swing-wardrobe-4.jpg";
import swingWardrobe5 from "@/public/Wardrobe/Swing-wardrobe-5.jpg";
import swingWardrobe6 from "@/public/Wardrobe/Swing-wardrobe-6.jpg";
import swingWardrobe7 from "@/public/Wardrobe/Swing-wardrobe-7.jpg";
import swingWardrobe8 from "@/public/Wardrobe/Swing-wardrobe-8.jpg";
import swingWardrobe9 from "@/public/Wardrobe/Swing-wardrobe-9.jpg";
import swingWardrobe10 from "@/public/Wardrobe/Swing-wardrobe-10.jpg";
import swingWardrobe11 from "@/public/Wardrobe/Swing-wardrobe-11.jpg";
import swingWardrobe12 from "@/public/Wardrobe/Swing-wardrobe-12.jpg";
import swingWardrobe13 from "@/public/Wardrobe/Swing-wardrobe-13.jpg";
import slidingWardrobe1 from "@/public/Wardrobe/Sliding-wardrobe-1.jpg";
import slidingWardrobe2 from "@/public/Wardrobe/Sliding-wardrobe-2.jpg";
import slidingWardrobe3 from "@/public/Wardrobe/Sliding-wardrobe-3.jpg";


const tabs = [
    {tag: 'all', title: 'Wszystkie'},
    {tag: 'wardrobe', title: 'Garderoby'},
    {tag: 'swing', title: 'Skrzydłowe'},
    {tag: 'sliding', title: 'Przesuwne'},
]

const images = [
    {id: '1', src: wardrobe1, tag: 'wardrobe'},
    {id: '1', src: wardrobe2, tag: 'wardrobe'},
    {id: '1', src: wardrobe4, tag: 'wardrobe'},
    {id: '1', src: wardrobe5, tag: 'wardrobe'},
    {id: '1', src: wardrobe6, tag: 'wardrobe'},
    {id: '1', src: wardrobe7, tag: 'wardrobe'},
    {id: '1', src: wardrobe8, tag: 'wardrobe'},
    {id: '1', src: swingWardrobe1, tag: 'swing'},
    {id: '1', src: swingWardrobe2, tag: 'swing'},
    {id: '1', src: swingWardrobe3, tag: 'swing'},
    {id: '1', src: swingWardrobe4, tag: 'swing'},
    {id: '1', src: swingWardrobe5, tag: 'swing'},
    {id: '1', src: swingWardrobe6, tag: 'swing'},
    {id: '1', src: swingWardrobe7, tag: 'swing'},
    {id: '1', src: swingWardrobe8, tag: 'swing'},
    {id: '1', src: swingWardrobe9, tag: 'swing'},
    {id: '1', src: swingWardrobe10, tag: 'swing'},
    {id: '1', src: swingWardrobe11, tag: 'swing'},
    {id: '1', src: swingWardrobe12, tag: 'swing'},
    {id: '1', src: swingWardrobe13, tag: 'swing'},
    {id: '1', src: slidingWardrobe1, tag: 'sliding'},
    {id: '1', src: slidingWardrobe2, tag: 'sliding'},
    {id: '1', src: slidingWardrobe3, tag: 'sliding'},
]

const GalleryWardrobe = ({defaultTag}: {defaultTag: string}) => {
    return (
        <Gallery
            tabs={tabs}
            images={images}
            title={'Galeria realizacji'}
            defaultTag={defaultTag}
        />
    );
};

export default GalleryWardrobe;