'use client'

import React from 'react';
import Gallery, {ImageProps} from "@/components/gallery/Gallery";
import bath1 from "@/public/Custom/Bath-room/bath-1.jpg";
import bath2 from "@/public/Custom/Bath-room/bath-2.jpg";
import bath31 from "@/public/Custom/Bath-room/bath-3.jpg";
import bath32 from "@/public/Custom/Bath-room/bath-13.jpg";
import bath4 from "@/public/Custom/Bath-room/bath-4.jpg";
import bath51 from "@/public/Custom/Bath-room/bath-5.jpg";
import bath52 from "@/public/Custom/Bath-room/bath-6-1.jpg";
import bath6 from "@/public/Custom/Bath-room/bath-6-2.jpg";
import bath7 from "@/public/Custom/Bath-room/bath-7.jpg";
import bath8 from "@/public/Custom/Bath-room/bath-8.jpg";
import bath9 from "@/public/Custom/Bath-room/bath-9.jpg";
import bath101 from "@/public/Custom/Bath-room/bath-10.jpg";
import bath102 from "@/public/Custom/Bath-room/bath-12.jpg";
import bath103 from "@/public/Custom/Bath-room/bath-12-2.jpg";
import bath11 from "@/public/Custom/Bath-room/bath-11.jpg";
import bath14 from "@/public/Custom/Bath-room/bath-14.jpg";
import bath15 from "@/public/Custom/Bath-room/bath-15.jpg";
import bath16 from "@/public/Custom/Bath-room/bath-16.jpg";
import bath17 from "@/public/Custom/Bath-room/bath-17.jpg";
import living1 from "@/public/Custom/Living-room/living-room-1.jpg";
import living21 from "@/public/Custom/Living-room/living-room-2.jpg";
import living22 from "@/public/Custom/Living-room/living-room-9.jpg";
import living3 from "@/public/Custom/Living-room/living-room-10.jpg";
import living41 from "@/public/Custom/Living-room/living-room-3.jpg";
import living42 from "@/public/Custom/Living-room/living-room-4.jpg";
import living43 from "@/public/Custom/Living-room/living-room-11.jpg";
import living5 from "@/public/Custom/Living-room/living-room-5.jpg";
import living6 from "@/public/Custom/Living-room/living-room-6.jpg";
import living7 from "@/public/Custom/Living-room/living-room-7.jpg";
import living8 from "@/public/Custom/Living-room/living-room-12.jpg";
import living9 from "@/public/Custom/Living-room/living-room-13.jpg";
import living10 from "@/public/Custom/Living-room/living-room-14.jpg";
import living11 from "@/public/Custom/Living-room/living-room-15.jpg";
import living12 from "@/public/Custom/Living-room/living-room-16.jpg";
import living13 from "@/public/Custom/Living-room/living-room-17-1.jpg";
import living14 from "@/public/Custom/Living-room/living-room-17-2.jpg";
import living15 from "@/public/Custom/Living-room/living-room-18.jpg";
import living16 from "@/public/Custom/Living-room/living-room-19-1.jpg";
import living17 from "@/public/Custom/Living-room/living-room-19-2.jpg";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

const tabs = [
    {tag: 'all', title: 'gallery-tab-all'},
    {tag: 'bath', title: 'gallery-custom-tab1'},
    {tag: 'living', title: 'gallery-custom-tab2'},
    // {tag: 'custom', title: 'Na wymiar'},
]

const rawImages = [
    {src: bath1, filename: 'bath-1-1'},
    {src: bath2, filename: 'bath-2-1'},
    {src: bath31, filename: 'bath-3-1'},
    {src: bath32, filename: 'bath-3-2'},
    {src: bath4, filename: 'bath-4-1'},
    {src: bath51, filename: 'bath-5-1'},
    {src: bath52, filename: 'bath-5-2'},
    {src: bath6, filename: 'bath-6-1'},
    {src: bath7, filename: 'bath-7-1'},
    {src: bath8, filename: 'bath-8-1'},
    {src: bath9, filename: 'bath-9-1'},
    {src: bath101, filename: 'bath-10-1'},
    {src: bath102, filename: 'bath-10-2'},
    {src: bath103, filename: 'bath-10-3'},
    {src: bath11, filename: 'bath-11-1'},
    {src: bath14, filename: 'bath-14-1'},
    {src: bath15, filename: 'bath-15-1'},
    {src: bath16, filename: 'bath-16-1'},
    {src: bath17, filename: 'bath-17-1'},
    {src: living1, filename: 'living-1-1'},
    {src: living21, filename: 'living-2-1'},
    {src: living22, filename: 'living-2-2'},
    {src: living3, filename: 'living-3-1'},
    {src: living41, filename: 'living-4-1'},
    {src: living42, filename: 'living-4-2'},
    {src: living43, filename: 'living-4-3'},
    {src: living5, filename: 'living-5-1'},
    {src: living6, filename: 'living-6-1'},
    {src: living7, filename: 'living-7-1'},
    {src: living8, filename: 'living-8-1'},
    {src: living9, filename: 'living-9-1'},
    {src: living10, filename: 'living-10-1'},
    {src: living11, filename: 'living-11-1'},
    {src: living12, filename: 'living-12-1'},
    {src: living13, filename: 'living-13-1'},
    {src: living14, filename: 'living-14-1'},
    {src: living15, filename: 'living-15-1'},
    {src: living16, filename: 'living-16-1'},
    {src: living17, filename: 'living-17-1'},
    //{src: living8, filename: 'living'},
    // {src: custom2, filename: 'custom'},
    // {src: custom3, filename: 'custom'},
    // {src: custom41, filename: 'custom'},
    // {src: custom42, filename: 'custom'},
    // {src: custom5, filename: 'custom'},

]


const images: ImageProps[] = rawImages.map(({ src, filename }) => {
    const [tag, groupNum] = filename.split('-');
    const group = `${tag}-${groupNum}`;
    return {
        id: filename,
        tag,
        group,
        src
    };
});

const GalleryCustom = ({defaultTag}: {defaultTag: string}) => {

    return (
        <I18nProvider>
            <Gallery
                tabs={tabs}
                images={images}
                defaultTag={defaultTag}
            />
        </I18nProvider>

    );
};

export default GalleryCustom;