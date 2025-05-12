import React from 'react';
import Gallery, {ImageProps} from "@/components/gallery/Gallery";
import wardrobe41 from "@/public/Wardrobe/dressing-4-1.jpg";
import wardrobe5 from "@/public/Wardrobe/dressing-5.jpg";
import wardrobe6 from "@/public/Wardrobe/dressing-6.jpg";
import wardrobe7 from "@/public/Wardrobe/dressing-7.jpg";
import wardrobe8 from "@/public/Wardrobe/dressing-8.jpg";
import wardrobe91 from "@/public/Wardrobe/dressing-9-1.jpg";
import wardrobe92 from "@/public/Wardrobe/dressing-9-2.jpg";
import wardrobe10 from "@/public/Wardrobe/dressing-10.jpg";
import wardrobe11 from "@/public/Wardrobe/dressing-3-1.jpg";
import wardrobe12 from "@/public/Wardrobe/dressing-3-2.jpg";
import hallwayWardrobe4 from "@/public/Wardrobe/Hallway-2-1.jpg";
import hallwayWardrobe5 from "@/public/Wardrobe/Hallway-2-2.jpg";
import hallwayWardrobe6 from "@/public/Wardrobe/Hallway-2-3.jpg";
import hallwayWardrobe7 from "@/public/Wardrobe/Hallway-3-1.jpg";
import hallwayWardrobe8 from "@/public/Wardrobe/Hallway-3-2.jpg";
import hallwayWardrobe9 from "@/public/Wardrobe/Hallway-3-3.jpg";
import hallwayWardrobe10 from "@/public/Wardrobe/Hallway-3-4.jpg";
import hallwayWardrobe11 from "@/public/Wardrobe/Hallway-4.jpg";
import hallwayWardrobe12 from "@/public/Wardrobe/Hallway-5.jpg";
import hallwayWardrobe13 from "@/public/Wardrobe/Hallway-6.jpg";
import hallwayWardrobe14 from "@/public/Wardrobe/Hallway-7.jpg";
import hallwayWardrobe15 from "@/public/Wardrobe/Hallway-8-1.jpg";
import hallwayWardrobe16 from "@/public/Wardrobe/Hallway-8-2.jpg";
import hallwayWardrobe17 from "@/public/Wardrobe/Hallway-9-1.jpg";
import hallwayWardrobe18 from "@/public/Wardrobe/Hallway-9-2.jpg";
import hallwayWardrobe19 from "@/public/Wardrobe/Hallway-10.jpg";
import hallwayWardrobe20 from "@/public/Wardrobe/Hallway-11-1.jpg";
import hallwayWardrobe21 from "@/public/Wardrobe/Hallway-11-2.jpg";
import hallwayWardrobe23 from "@/public/Wardrobe/Hallway-12-1.jpg";
import hallwayWardrobe24 from "@/public/Wardrobe/Hallway-12-2.jpg";
import slidingWardrobe1 from "@/public/Wardrobe/Sliding-wardrobe-1.jpg";
import slidingWardrobe2 from "@/public/Wardrobe/Sliding-wardrobe-2.jpg";
import slidingWardrobe3 from "@/public/Wardrobe/Sliding-wardrobe-3.jpg";
import slidingWardrobe41 from "@/public/Wardrobe/Sliding-wardrobe-4-1.jpg";
import slidingWardrobe42 from "@/public/Wardrobe/Sliding-wardrobe-4-2.jpg";
import slidingWardrobe43 from "@/public/Wardrobe/Sliding-wardrobe-4-3.jpg";
import slidingWardrobe51 from "@/public/Wardrobe/Sliding-wardrobe-5-1.jpg";
import slidingWardrobe52 from "@/public/Wardrobe/Sliding-wardrobe-5-2.jpg";
import slidingWardrobe71 from "@/public/Wardrobe/Sliding-wardrobe-7-1.jpg";
import slidingWardrobe72 from "@/public/Wardrobe/Sliding-wardrobe-7-2.jpg";
import slidingWardrobe73 from "@/public/Wardrobe/Sliding-wardrobe-7-3.jpg";
import slidingWardrobe91 from "@/public/Wardrobe/Sliding-wardrobe-9-1.jpg";
import slidingWardrobe92 from "@/public/Wardrobe/Sliding-wardrobe-9-2.jpg";
import slidingWardrobe93 from "@/public/Wardrobe/Sliding-wardrobe-9-3.jpg";
import slidingWardrobe94 from "@/public/Wardrobe/Sliding-wardrobe-9-4.jpg";
import slidingWardrobe101 from "@/public/Wardrobe/Sliding-wardrobe-10-1.jpg";
import slidingWardrobe102 from "@/public/Wardrobe/Sliding-wardrobe-10-2.jpg";
import slidingWardrobe103 from "@/public/Wardrobe/Sliding-wardrobe-10-3.jpg";
import slidingWardrobe104 from "@/public/Wardrobe/Sliding-wardrobe-10-4.jpg";
import bedroomWardrobe1 from "@/public/Wardrobe/bedroom-1.jpg";
import bedroomWardrobe2 from "@/public/Wardrobe/bedroom-2.jpg";
import bedroomWardrobe3 from "@/public/Wardrobe/bedroom-3.jpg";
import bedroomWardrobe4 from "@/public/Wardrobe/bedroom-4.jpg";
import bedroomWardrobe5 from "@/public/Wardrobe/bedroom-5.jpg";
import bedroomWardrobe6 from "@/public/Wardrobe/bedroom-6.jpg";
import bedroomWardrobe7 from "@/public/Wardrobe/bedroom-7.jpg";
import bedroomWardrobe8 from "@/public/Wardrobe/bedroom-8.jpg";
import bedroomWardrobe9 from "@/public/Wardrobe/bedroom-9.jpg";
import bedroomWardrobe10 from "@/public/Wardrobe/bedroom-10.jpg";
import bedroomWardrobe11 from "@/public/Wardrobe/bedroom-10-2.jpg";
import bedroomWardrobe12 from "@/public/Wardrobe/bedroom-11-1.jpg";
import bedroomWardrobe13 from "@/public/Wardrobe/bedroom-11-2.jpg";
import bedroomWardrobe14 from "@/public/Wardrobe/bedroom-12-1.jpg";
import bedroomWardrobe15 from "@/public/Wardrobe/bedroom-12-2.jpg";
import bedroomWardrobe16 from "@/public/Wardrobe/bedroom-12-3.jpg";
import bedroomWardrobe17 from "@/public/Wardrobe/bedroom-13-1.jpg";
import bedroomWardrobe18 from "@/public/Wardrobe/bedroom-13-2.jpg";
import bedroomWardrobe19 from "@/public/Wardrobe/bedroom-14-1.jpg";
import bedroomWardrobe20 from "@/public/Wardrobe/bedroom-14-2.jpg";
import bedroomWardrobe21 from "@/public/Wardrobe/bedroom-14-3.jpg";
import bedroomWardrobe22 from "@/public/Wardrobe/bedroom-15-1.jpg";
import bedroomWardrobe23 from "@/public/Wardrobe/bedroom-15-2.jpg";
import nicheWardrobe1 from "@/public/Wardrobe/niche-1.jpg";
import nicheWardrobe2 from "@/public/Wardrobe/niche-2.jpg";
import nicheWardrobe3 from "@/public/Wardrobe/niche-3.jpg";
import nicheWardrobe4 from "@/public/Wardrobe/niche-4.jpg";
import nicheWardrobe5 from "@/public/Wardrobe/niche-5.jpg";
import nicheWardrobe6 from "@/public/Wardrobe/niche-6.jpg";
import nicheWardrobe7 from "@/public/Wardrobe/niche-7.jpg";
import nicheWardrobe8 from "@/public/Wardrobe/niche-8.jpg";
import nicheWardrobe9 from "@/public/Wardrobe/niche-9.jpg";
import nicheWardrobe10 from "@/public/Wardrobe/niche-10-1.jpg";
import nicheWardrobe11 from "@/public/Wardrobe/niche-10-2.jpg";
import nicheWardrobe12 from "@/public/Wardrobe/niche-11-1.jpg";
import nicheWardrobe13 from "@/public/Wardrobe/niche-11-2.jpg";
import nicheWardrobe14 from "@/public/Wardrobe/niche-11-3.jpg";
import nicheWardrobe17 from "@/public/Wardrobe/niche-13-1.jpg";
import nicheWardrobe18 from "@/public/Wardrobe/niche-13-2.jpg";
import nicheWardrobe21 from "@/public/Wardrobe/niche-15-1.jpg";
import nicheWardrobe22 from "@/public/Wardrobe/niche-15-2.jpg";
import cornerWardrobe1 from "@/public/Wardrobe/corner-1-1.jpg";
import cornerWardrobe2 from "@/public/Wardrobe/corner-1-2.jpg";
import cornerWardrobe3 from "@/public/Wardrobe/corner-2-1.jpg";
import cornerWardrobe4 from "@/public/Wardrobe/corner-2-2.jpg";
import cornerWardrobe5 from "@/public/Wardrobe/corner-2-3.jpg";
import cornerWardrobe6 from "@/public/Wardrobe/corner-4.jpg";
import bevelWardrobe1 from "@/public/Wardrobe/bevel-1.jpg";
import bevelWardrobe2 from "@/public/Wardrobe/bevel-2.jpeg";
import I18nProvider from "@/components/I18nProvider/I18nProvider";


const tabs = [
    {tag: 'all', title: 'Wszystkie'},
    {tag: 'wardrobe', title: 'Garderoby'},
    {tag: 'hallway', title: 'Przedpokoj'},
    {tag: 'sliding', title: 'Przesuwne'},
    {tag: 'bedroom', title: 'Sypialnia'},
    {tag: 'niche', title: 'Wnekowe'},
    {tag: 'corner', title: 'Narożne'},
    {tag: 'bevel', title: 'Skos'},
]

const rawImages = [
    {src: wardrobe41, filename: 'wardrobe-1-1'},
    {src: wardrobe5, filename: 'wardrobe-2-1'},
    {src: wardrobe6, filename: 'wardrobe-3-1'},
    {src: wardrobe7, filename: 'wardrobe-4-1'},
    {src: wardrobe8, filename: 'wardrobe-5-1'},
    {src: wardrobe91, filename: 'wardrobe-6-1'},
    {src: wardrobe92, filename: 'wardrobe-6-2'},
    {src: wardrobe10, filename: 'wardrobe-7-1'},
    {src: wardrobe11, filename: 'wardrobe-8-1'},
    {src: wardrobe12, filename: 'wardrobe-9-1'},
    {src: hallwayWardrobe4, filename: 'hallway-1-1'},
    {src: hallwayWardrobe5, filename: 'hallway-1-2'},
    {src: hallwayWardrobe6, filename: 'hallway-1-3'},
    {src: hallwayWardrobe7, filename: 'hallway-2-1'},
    {src: hallwayWardrobe8, filename: 'hallway--2'},
    {src: hallwayWardrobe9, filename: 'hallway-2-3'},
    {src: hallwayWardrobe10, filename: 'hallway-2-4'},
    {src: hallwayWardrobe11, filename: 'hallway-3-1'},
    {src: hallwayWardrobe12, filename: 'hallway-3-2'},
    {src: hallwayWardrobe13, filename: 'hallway-4-1'},
    {src: hallwayWardrobe14, filename: 'hallway-3-3'},
    {src: hallwayWardrobe15, filename: 'hallway-4-1'},
    {src: hallwayWardrobe16, filename: 'hallway-4-2'},
    {src: hallwayWardrobe17, filename: 'hallway-5-1'},
    {src: hallwayWardrobe18, filename: 'hallway-5-2'},
    {src: hallwayWardrobe19, filename: 'hallway-6-1'},
    {src: hallwayWardrobe20, filename: 'hallway-7-1'},
    {src: hallwayWardrobe21, filename: 'hallway-7-2'},
    //{src: hallwayWardrobe22, filename: 'hallway'},
    {src: hallwayWardrobe23, filename: 'hallway-8-1'},
    {src: hallwayWardrobe24, filename: 'hallway-8-2'},
    {src: slidingWardrobe1, filename: 'sliding-1-1'},
    {src: slidingWardrobe2, filename: 'sliding-2-1'},
    {src: slidingWardrobe3, filename: 'sliding-3-1'},
    {src: slidingWardrobe41, filename: 'sliding-4-1'},
    {src: slidingWardrobe42, filename: 'sliding-4-2'},
    {src: slidingWardrobe43, filename: 'sliding-4-3'},
    {src: slidingWardrobe51, filename: 'sliding-5-1'},
    {src: slidingWardrobe52, filename: 'sliding-5-2'},
    //{src: slidingWardrobe63, filename: 'sliding-6-1'},
    {src: slidingWardrobe71, filename: 'sliding-7-1'},
    {src: slidingWardrobe72, filename: 'sliding-7-2'},
    {src: slidingWardrobe73, filename: 'sliding7-3'},
    //{src: slidingWardrobe8, filename: 'sliding-8-1'},
    {src: slidingWardrobe91, filename: 'sliding-9-1'},
    {src: slidingWardrobe92, filename: 'sliding-9-2'},
    {src: slidingWardrobe93, filename: 'sliding-9-3'},
    {src: slidingWardrobe94, filename: 'sliding-9-4'},
    {src: slidingWardrobe101, filename: 'sliding-10-1'},
    {src: slidingWardrobe102, filename: 'sliding-10-2'},
    {src: slidingWardrobe103, filename: 'sliding-10-3'},
    {src: slidingWardrobe104, filename: 'sliding-10-4'},
    {src: bedroomWardrobe1, filename: 'bedroom-1-1'},
    {src: bedroomWardrobe2, filename: 'bedroom-2-1'},
    {src: bedroomWardrobe3, filename: 'bedroom-3-1'},
    {src: bedroomWardrobe4, filename: 'bedroom-4-1'},
    {src: bedroomWardrobe5, filename: 'bedroom-5-1'},
    {src: bedroomWardrobe6, filename: 'bedroom-6-1'},
    {src: bedroomWardrobe7, filename: 'bedroom-7-1'},
    {src: bedroomWardrobe8, filename: 'bedroom-8-1'},
    {src: bedroomWardrobe9, filename: 'bedroom-9-1'},
    {src: bedroomWardrobe10, filename: 'bedroom-10-1'},
    {src: bedroomWardrobe11, filename: 'bedroom-10-2'},
    {src: bedroomWardrobe12, filename: 'bedroom-11-1'},
    {src: bedroomWardrobe13, filename: 'bedroom-11-2'},
    {src: bedroomWardrobe14, filename: 'bedroom-12-1'},
    {src: bedroomWardrobe15, filename: 'bedroom-12-2'},
    {src: bedroomWardrobe16, filename: 'bedroom-12-3'},
    {src: bedroomWardrobe17, filename: 'bedroom-13-1'},
    {src: bedroomWardrobe18, filename: 'bedroom-13-2'},
    {src: bedroomWardrobe19, filename: 'bedroom-14-1'},
    {src: bedroomWardrobe20, filename: 'bedroom-14-2'},
    {src: bedroomWardrobe21, filename: 'bedroom-14-3'},
    {src: bedroomWardrobe22, filename: 'bedroom-15-1'},
    {src: bedroomWardrobe23, filename: 'bedroom-15-2'},
    {src: nicheWardrobe9, filename: 'niche-1-1'},
    {src: nicheWardrobe1, filename: 'niche-2-1'},
    {src: nicheWardrobe2, filename: 'niche-3-1'},
    {src: nicheWardrobe3, filename: 'niche-4-1'},
    {src: nicheWardrobe4, filename: 'niche-5-1'},
    {src: nicheWardrobe5, filename: 'niche-6-1'},
    {src: nicheWardrobe6, filename: 'niche-7-1'},
    {src: nicheWardrobe7, filename: 'niche-8-1'},
    {src: nicheWardrobe8, filename: 'niche-9-1'},
    {src: nicheWardrobe9, filename: 'niche-10-1'},
    {src: nicheWardrobe10, filename: 'niche-11-1'},
    {src: nicheWardrobe11, filename: 'niche-11-2'},
    {src: nicheWardrobe12, filename: 'niche-12-1'},
    {src: nicheWardrobe13, filename: 'niche-12-2'},
    {src: nicheWardrobe14, filename: 'niche-12-3'},
    //{src: nicheWardrobe15, filename: 'niche'},
    //{src: nicheWardrobe16, filename: 'niche'},
    {src: nicheWardrobe17, filename: 'niche-13-1'},
    {src: nicheWardrobe18, filename: 'niche-13-2'},
    //{src: nicheWardrobe19, filename: 'niche'},
    //{src: nicheWardrobe20, filename: 'niche'},
    {src: nicheWardrobe21, filename: 'niche-14-4'},
    {src: nicheWardrobe22, filename: 'niche-14-2'},
    {src:cornerWardrobe1, filename: 'corner-1-1'},
    {src: cornerWardrobe2, filename: 'corner-1-2'},
    {src: cornerWardrobe3, filename: 'corner-2-1'},
    {src: cornerWardrobe4, filename: 'corner-2-2'},
    {src: cornerWardrobe5, filename: 'corner-2-3'},
    {src: cornerWardrobe6, filename: 'corner-3-1'},
    {src: bevelWardrobe1, filename: 'bevel-1-1'},
    {src: bevelWardrobe2, filename: 'bevel-2-1'},
    // {id: '74', src: bevelWardrobe3, tag: 'bevel'},
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

const GalleryWardrobe = ({defaultTag}: {defaultTag: string}) => {
    return (
        <I18nProvider>
            <Gallery
                tabs={tabs}
                images={images}
                defaultTag={defaultTag}
                height={'wardrobe'}
            />
        </I18nProvider>

    );
};

export default GalleryWardrobe;