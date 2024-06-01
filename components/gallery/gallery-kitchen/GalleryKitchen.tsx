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
import modern191 from "@/public/Kitchen/Modern/Modern-19-1.jpg";
import modern192 from "@/public/Kitchen/Modern/Modern-19-2.jpg";
import modern193 from "@/public/Kitchen/Modern/Modern-19-3.jpg";
import modern194 from "@/public/Kitchen/Modern/Modern-19-4.jpg";
import modern195 from "@/public/Kitchen/Modern/Modern-19-5.jpg";
import modern196 from "@/public/Kitchen/Modern/Modern-19-6.jpg";
import modern197 from "@/public/Kitchen/Modern/Modern-19-7.jpg";
import modern201 from "@/public/Kitchen/Modern/Modern-20-1.jpg";
import modern202 from "@/public/Kitchen/Modern/Modern-20-2.jpg";
import modern203 from "@/public/Kitchen/Modern/Modern-20-3.jpg";
import modern204 from "@/public/Kitchen/Modern/Modern-20-4.jpg";
import modern23 from "@/public/Kitchen/Modern/Modern-21.jpg";
import modern24 from "@/public/Kitchen/Modern/Modern-22.jpg";
import classic21 from "@/public/Kitchen/Classic/Classic-2-1.jpg";
import classic22 from "@/public/Kitchen/Classic/Classic-2-2.jpg";
import classic23 from "@/public/Kitchen/Classic/Classic-2-3.jpg";
import classic3 from "@/public/Kitchen/Classic/Classic-3.jpg";
import classic4 from "@/public/Kitchen/Classic/Classic-4.jpg";
import classic51 from "@/public/Kitchen/Classic/Classic-5-1.jpg";
import classic52 from "@/public/Kitchen/Classic/Classic-5-2.jpg";
import high1 from "@/public/Kitchen/HIGH-TECH/high-tech-1.jpg";
import high23 from "@/public/Kitchen/HIGH-TECH/high-tech-2-3.jpg";
import high24 from "@/public/Kitchen/HIGH-TECH/high-tech-2-4.jpg";
import high25 from "@/public/Kitchen/HIGH-TECH/high-tech-2-5.jpg";
import high3 from "@/public/Kitchen/HIGH-TECH/high-tech-3.jpg";
import high41 from "@/public/Kitchen/HIGH-TECH/high-tech-4-1.jpg";
import high42 from "@/public/Kitchen/HIGH-TECH/high-tech-4-2.jpg";
import high5 from "@/public/Kitchen/HIGH-TECH/high-tech-5.jpg";
import high6 from "@/public/Kitchen/HIGH-TECH/high-tech-6.jpg";
import high62 from "@/public/Kitchen/HIGH-TECH/high-tech-6-2.jpg";
import high63 from "@/public/Kitchen/HIGH-TECH/high-tech-6-3.jpg";
import high7 from "@/public/Kitchen/HIGH-TECH/high-tech-7.jpg";
import high8 from "@/public/Kitchen/HIGH-TECH/high-tech-8.jpg";
import high91 from "@/public/Kitchen/HIGH-TECH/high-tech-9-1.jpg";
import high92 from "@/public/Kitchen/HIGH-TECH/high-tech-9-2.jpg";
import high101 from "@/public/Kitchen/HIGH-TECH/high-tech-10-1.jpg";
import high102 from "@/public/Kitchen/HIGH-TECH/high-tech-10-2.jpg";
import high103 from "@/public/Kitchen/HIGH-TECH/high-tech-10-3.jpg";

const tabs = [
    {tag: 'all', title: 'Wszystkie'},
    {tag: 'modern', title: 'Nowoczesny'},
    {tag: 'high', title: 'High-Tech'},
    {tag: 'classic', title: 'Klasyczny'},
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
    {id: '28', src: modern191, tag: 'modern'},
    {id: '28', src: modern192, tag: 'modern'},
    {id: '28', src: modern193, tag: 'modern'},
    {id: '28', src: modern194, tag: 'modern'},
    {id: '28', src: modern195, tag: 'modern'},
    {id: '28', src: modern196, tag: 'modern'},
    {id: '28', src: modern197, tag: 'modern'},
    {id: '28', src: modern201, tag: 'modern'},
    {id: '28', src: modern202, tag: 'modern'},
    {id: '28', src: modern203, tag: 'modern'},
    {id: '28', src: modern204, tag: 'modern'},
    {id: '28', src: modern23, tag: 'modern'},
    {id: '28', src: modern24, tag: 'modern'},
    {id: '29', src: classic21, tag: 'classic'},
    {id: '30', src: classic22, tag: 'classic'},
    {id: '31', src: classic23, tag: 'classic'},
    {id: '32', src: classic3, tag: 'classic'},
    {id: '33', src: classic4, tag: 'classic'},
    {id: '34', src: classic51, tag: 'classic'},
    {id: '35', src: classic52, tag: 'classic'},
    {id: '36', src: high1, tag: 'high'},
    {id: '37', src: high23, tag: 'high'},
    {id: '38', src: high24, tag: 'high'},
    {id: '39', src: high25, tag: 'high'},
    {id: '40', src: high3, tag: 'high'},
    {id: '41', src: high41, tag: 'high'},
    {id: '42', src: high42, tag: 'high'},
    {id: '43', src: high5, tag: 'high'},
    {id: '44', src: high6, tag: 'high'},
    {id: '45', src: high62, tag: 'high'},
    {id: '46', src: high63, tag: 'high'},
    {id: '47', src: high7, tag: 'high'},
    {id: '48', src: high8, tag: 'high'},
    {id: '49', src: high91, tag: 'high'},
    {id: '50', src: high92, tag: 'high'},
    {id: '51', src: high101, tag: 'high'},
    {id: '52', src: high102, tag: 'high'},
    {id: '53', src: high103, tag: 'high'},
]

const GalleryKitchen = ({defaultTag}: {defaultTag: string}) => {
    return (
        <Gallery
            tabs={tabs}
            images={images}
            title={'Galeria realizacji'}
            defaultTag={defaultTag}
        />
    );
};

export default GalleryKitchen;