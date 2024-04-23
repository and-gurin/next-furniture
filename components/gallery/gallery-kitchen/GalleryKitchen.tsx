import React from 'react';
import Gallery from "@/components/gallery/Gallery";
import modern1 from "@/public/Kitchen/Modern/Modern-1.jpg";
import modern21 from "@/public/Kitchen/Modern/Modern-2-1.jpg";
import modern22 from "@/public/Kitchen/Modern/Modern-2-2.jpg";
import modern4 from "@/public/Kitchen/Modern/Modern-4.jpg";
import modern5 from "@/public/Kitchen/Modern/Modern-5.jpg";
import modern61 from "@/public/Kitchen/Modern/Modern-6-1.jpg";
import modern62 from "@/public/Kitchen/Modern/Modern-6-2.jpg";
import modern71 from "@/public/Kitchen/Modern/Modern-7-1.jpg";
import modern72 from "@/public/Kitchen/Modern/Modern-7-2.jpg";
import modern8 from "@/public/Kitchen/Modern/Modern-8.jpg";
import modern91 from "@/public/Kitchen/Modern/Modern-9-1.jpg";
import modern92 from "@/public/Kitchen/Modern/Modern-9-2.jpg";
import modern93 from "@/public/Kitchen/Modern/Modern-9-3.jpg";
import modern10 from "@/public/Kitchen/Modern/Modern-10.jpg";
import modern111 from "@/public/Kitchen/Modern/Modern-11-1.jpg";
import modern112 from "@/public/Kitchen/Modern/Modern-11-2.jpg";
import modern121 from "@/public/Kitchen/Modern/Modern-12-1.jpg";
import modern122 from "@/public/Kitchen/Modern/Modern-12-2.jpg";
import modern13 from "@/public/Kitchen/Modern/Modern-13.jpg";
import modern141 from "@/public/Kitchen/Modern/Modern-14-1.jpg";
import modern142 from "@/public/Kitchen/Modern/Modern-14-2.jpg";
import modern15 from "@/public/Kitchen/Modern/Modern-15.jpg";
import modern161 from "@/public/Kitchen/Modern/Modern-16-1.jpg";
import modern162 from "@/public/Kitchen/Modern/Modern-16-2.jpg";
import modern163 from "@/public/Kitchen/Modern/Modern-16-3.jpg";
import modern171 from "@/public/Kitchen/Modern/Modern-17-1.jpg";
import modern172 from "@/public/Kitchen/Modern/Modern-17-2.jpg";
import modern18 from "@/public/Kitchen/Modern/Modern-18.jpg";

const tabs = [
    {tag: 'all', title: 'Wszystkie'},
    {tag: 'modern', title: 'Nowoczesny styl'},
    {tag: 'high', title: 'Styl High-Tech'},
    {tag: 'classic', title: 'Klasyczny styl'},
]

const images = [
    {id: '1', src: modern1, tag: 'modern'},
    {id: '2', src: modern21, tag: 'modern'},
    {id: '3', src: modern22, tag: 'modern'},
    {id: '4', src: modern4, tag: 'modern'},
    {id: '5', src: modern5, tag: 'modern'},
    {id: '6', src: modern61, tag: 'modern'},
    {id: '7', src: modern62, tag: 'modern'},
    {id: '8', src: modern71, tag: 'modern'},
    {id: '9', src: modern72, tag: 'modern'},
    {id: '10', src: modern8, tag: 'modern'},
    {id: '11', src: modern91, tag: 'modern'},
    {id: '12', src: modern92, tag: 'modern'},
    {id: '13', src: modern93, tag: 'modern'},
    {id: '14', src: modern10, tag: 'modern'},
    {id: '15', src: modern111, tag: 'modern'},
    {id: '16', src: modern112, tag: 'modern'},
    {id: '17', src: modern121, tag: 'modern'},
    {id: '18', src: modern122, tag: 'modern'},
    {id: '19', src: modern13, tag: 'modern'},
    {id: '20', src: modern141, tag: 'modern'},
    {id: '21', src: modern142, tag: 'modern'},
    {id: '22', src: modern15, tag: 'modern'},
    {id: '23', src: modern161, tag: 'modern'},
    {id: '24', src: modern162, tag: 'modern'},
    {id: '25', src: modern163, tag: 'modern'},
    {id: '26', src: modern171, tag: 'modern'},
    {id: '27', src: modern172, tag: 'modern'},
    {id: '28', src: modern18, tag: 'modern'},
]

const GalleryKitchen = () => {
    return (
        <Gallery tabs={tabs} images={images} title={'Galeria realizacji'}/>
    );
};

export default GalleryKitchen;