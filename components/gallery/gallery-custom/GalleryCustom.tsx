import React from 'react';
import Gallery from "@/components/gallery/Gallery";
import bath1 from "@/public/Custom/Bath-room/bath-1.jpg";
import bath2 from "@/public/Custom/Bath-room/bath-2.jpg";
import bath31 from "@/public/Custom/Bath-room/bath-3-1.jpg";
import bath32 from "@/public/Custom/Bath-room/bath-3-2.jpg";
import bath4 from "@/public/Custom/Bath-room/bath-4.jpg";
import bath51 from "@/public/Custom/Bath-room/bath-5-1.jpg";
import bath52 from "@/public/Custom/Bath-room/bath-5-2.jpg";
import bath6 from "@/public/Custom/Bath-room/bath-6.jpg";
import bath7 from "@/public/Custom/Bath-room/bath-7.jpg";
import bath8 from "@/public/Custom/Bath-room/bath-8.jpg";
import bath9 from "@/public/Custom/Bath-room/bath-9.jpg";
import bath101 from "@/public/Custom/Bath-room/bath-10-1.jpg";
import bath102 from "@/public/Custom/Bath-room/bath-10-2.jpg";
import bath103 from "@/public/Custom/Bath-room/bath-10-3.jpg";
import bath11 from "@/public/Custom/Bath-room/bath-11.jpg";
import living1 from "@/public/Custom/Living-room/living-room-1.jpg";
import living21 from "@/public/Custom/Living-room/living-room-2-1.jpg";
import living22 from "@/public/Custom/Living-room/living-room-2-2.jpg";
import living3 from "@/public/Custom/Living-room/living-room-2-3.jpg";
import living41 from "@/public/Custom/Living-room/living-room-3.jpg";
import living42 from "@/public/Custom/Living-room/living-room-4-1.jpg";
import living43 from "@/public/Custom/Living-room/living-room-4-2.jpg";
import living5 from "@/public/Custom/Living-room/living-room-5.jpg";
import living6 from "@/public/Custom/Living-room/living-room-6.jpg";
import living7 from "@/public/Custom/Living-room/living-room-7.jpg";
import living8 from "@/public/Custom/Living-room/living-room-8.jpg";
import custom1 from "@/public/Custom/Bed-room/bed-room-1.jpg";
import custom2 from "@/public/Custom/Bed-room/bed-room-2.jpg";
import custom3 from "@/public/Custom/Bed-room/bed-room-3.jpg";
import custom41 from "@/public/Custom/Bed-room/bed-room-4-1.jpg";
import custom42 from "@/public/Custom/Bed-room/bed-room-4-2.jpg";
import custom5 from "@/public/Custom/Bed-room/bed-room-5.jpg";


const tabs = [
    {tag: 'all', title: 'Wszystkie'},
    {tag: 'bath', title: 'Łazienka'},
    {tag: 'living', title: 'Salon'},
    {tag: 'custom', title: 'Na wymiar'},
]

const images = [
    {id: '1', src: bath1, tag: 'bath'},
    {id: '2', src: bath2, tag: 'bath'},
    {id: '3', src: bath31, tag: 'bath'},
    {id: '4', src: bath32, tag: 'bath'},
    {id: '5', src: bath4, tag: 'bath'},
    {id: '6', src: bath51, tag: 'bath'},
    {id: '7', src: bath52, tag: 'bath'},
    {id: '8', src: bath6, tag: 'bath'},
    {id: '9', src: bath7, tag: 'bath'},
    {id: '11', src: bath8, tag: 'bath'},
    {id: '12', src: bath9, tag: 'bath'},
    {id: '13', src: bath101, tag: 'bath'},
    {id: '14', src: bath102, tag: 'bath'},
    {id: '15', src: bath103, tag: 'bath'},
    {id: '16', src: bath11, tag: 'bath'},
    {id: '17', src: living1, tag: 'living'},
    {id: '18', src: living21, tag: 'living'},
    {id: '19', src: living22, tag: 'living'},
    {id: '20', src: living3, tag: 'living'},
    {id: '21', src: living41, tag: 'living'},
    {id: '22', src: living42, tag: 'living'},
    {id: '23', src: living43, tag: 'living'},
    {id: '24', src: living5, tag: 'living'},
    {id: '25', src: living6, tag: 'living'},
    {id: '26', src: living7, tag: 'living'},
    {id: '27', src: living8, tag: 'living'},
    {id: '28', src: custom1, tag: 'custom'},
    {id: '29', src: custom2, tag: 'custom'},
    {id: '30', src: custom3, tag: 'custom'},
    {id: '31', src: custom41, tag: 'custom'},
    {id: '32', src: custom42, tag: 'custom'},
    {id: '33', src: custom5, tag: 'custom'},

]

const GalleryCustom = ({defaultTag}: {defaultTag: string}) => {
    return (
        <Gallery
            tabs={tabs}
            images={images}
            title={'Galeria realizacji'}
            defaultTag={defaultTag}
        />
    );
};

export default GalleryCustom;