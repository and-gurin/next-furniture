import React from 'react';
import Gallery, {ImageProps} from "@/components/gallery/Gallery";
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
import high22 from "@/public/Kitchen/HIGH-TECH/high-tech-2-2.jpg";
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
import high11 from "@/public/Kitchen/HIGH-TECH/high-tech-11-1.jpg";
import high12 from "@/public/Kitchen/HIGH-TECH/high-tech-11-2.jpg";
import high13 from "@/public/Kitchen/HIGH-TECH/high-tech-11-3.jpg";
import high14 from "@/public/Kitchen/HIGH-TECH/high-tech-12-1.jpg";
import high15 from "@/public/Kitchen/HIGH-TECH/high-tech-12-2.jpg";
import high16 from "@/public/Kitchen/HIGH-TECH/high-tech-12-3.jpg";
import nob1 from "@/public/Kitchen/Nobilia/nobilia-1.jpg";
import nob2 from "@/public/Kitchen/Nobilia/nobilia-2.jpg";
import nob3 from "@/public/Kitchen/Nobilia/nobilia-3.jpg";
import nob4 from "@/public/Kitchen/Nobilia/nobilia-4.jpg";
import nob5 from "@/public/Kitchen/Nobilia/nobilia-5.jpg";
import nob6 from "@/public/Kitchen/Nobilia/nobilia-6.jpg";
import nob7 from "@/public/Kitchen/Nobilia/nobilia-7.jpg";
import nob8 from "@/public/Kitchen/Nobilia/nobilia-8.jpg";
import nob9 from "@/public/Kitchen/Nobilia/nobilia-9.jpg";
import nob10 from "@/public/Kitchen/Nobilia/nobilia-10.jpg";
import nob11 from "@/public/Kitchen/Nobilia/nobilia-11.jpg";
import nob12 from "@/public/Kitchen/Nobilia/nobilia-12.jpg";
import I18nProvider from '@/components/I18nProvider/I18nProvider';

const tabs = [
    {tag: 'all', title: 'gallery-tab-all'},
    {tag: 'modern', title: 'gallery-kitchen-tab1'},
    {tag: 'high', title: 'gallery-kitchen-tab2'},
    {tag: 'classic', title: 'gallery-kitchen-tab3'},
]

const rawImages = [
    {
        src: modern1,
        filename: 'modern-1-1'
    },
    {src: modern21, filename: 'modern-2-1'},
    {src: modern22, filename: 'modern-2-2'},
    {src: modern4, filename: 'modern-4-1'},
    {src: modern5, filename: 'modern-5-1'},
    {src: modern61, filename: 'modern-6-1'},
    {src: modern62, filename: 'modern-6-2'},
    {src: modern71, filename: 'modern-7-1'},
    {src: modern72, filename: 'modern-7-2'},
    {src: modern8, filename: 'modern-8-1'},
    {src: modern91, filename: 'modern-9-1'},
    {src: modern92, filename: 'modern-9-2'},
    {src: modern93, filename: 'modern-9-3'},
    {src: modern10, filename: 'modern-10-1'},
    { src: modern111, filename: 'modern-11-1'},
    {src: modern112, filename: 'modern-11-2'},
    {src: modern121, filename: 'modern-12-1'},
    {src: modern122, filename: 'modern-12-2'},
    {src: modern13, filename: 'modern-13-1'},
    {src: modern141, filename: 'modern-14-1'},
    {src: modern142, filename: 'modern-14-2'},
    {src: modern15, filename: 'modern-15-1'},
    {src: modern161, filename: 'modern-16-1'},
    {src: modern162, filename: 'modern-16-2'},
    {src: modern163, filename: 'modern-16-3'},
    {src: modern171, filename: 'modern-17-1'},
    {src: modern172, filename: 'modern-17-2'},
    {src: modern18, filename: 'modern-18-1'},
    {src: modern191, filename: 'modern-19-1'},
    {src: modern192, filename: 'modern-19-2'},
    {src: modern193, filename: 'modern-19-3'},
    {src: modern194, filename: 'modern-19-4'},
    {src: modern195, filename: 'modern-19-5'},
    {src: modern196, filename: 'modern-19-6'},
    {src: modern197, filename: 'modern-19-7'},
    {src: modern23, filename: 'modern-23-1'},
    {src: modern24, filename: 'modern-24-1'},
    {src: classic21, filename: 'classic-2-1'},
    {src: classic22, filename: 'classic-2-2'},
    {src: classic23, filename: 'classic2-3'},
    {src: classic3, filename: 'classic-3-1'},
    {src: classic4, filename: 'classic-4-1'},
    {src: classic51, filename: 'classic-5-1'},
    {src: classic52, filename: 'classic-5-2'},
    {src: high1, filename: 'modern-20-1'},
    {src: high22, filename: 'modern-22-1'},
    {src: high23, filename: 'modern-22-2'},
    {src: high24, filename: 'modern-22-3'},
    {src: high25, filename: 'modern-22-4'},
    {src: high3, filename: 'modern-25-1'},
    {src: high41, filename: 'modern-40-1'},
    {src: high42, filename: 'modern-40-2'},
    {src: high5, filename: 'modern-45-1'},
    {src: high6, filename: 'modern-46-1'},
    {src: high62, filename: 'modern-47-1'},
    {src: high63, filename: 'modern-47-2'},
    {src: high7, filename: 'modern-48-1'},
    {src: high8, filename: 'modern-49-1'},
    {src: high91, filename: 'modern-50-1'},
    {src: high92, filename: 'modern-50-2'},
    {src: high101, filename: 'modern-51-1'},
    {src: high102, filename: 'modern-51-2'},
    {src: high103, filename: 'modern-51-3'},
    {src: high11, filename: 'modern-52-1'},
    {src: high12, filename: 'modern-52-2'},
    {src: high13, filename: 'modern-52-3'},
    {src: high14, filename: 'modern-53-1'},
    {src: high15, filename: 'modern-53-2'},
    {src: high16, filename: 'modern-53-3'},
    {src: nob1, filename: 'high-1-1'},
    {src: nob2, filename: 'high-2-1'},
    {src: nob3, filename: 'high-3-1'},
    {src: nob4, filename: 'high-4-1'},
    {src: nob5, filename: 'high-5-1'},
    {src: nob6, filename: 'high-6-1'},
    {src: nob7, filename: 'high-7-1'},
    {src: nob8, filename: 'high-8-1'},
    {src: nob9, filename: 'high-9-1'},
    {src: nob10, filename: 'high-10-1'},
    {src: nob11, filename: 'high-11-1'},
    {src: nob12, filename: 'high-12-1'},
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

const GalleryKitchen = ({defaultTag}: {defaultTag: string}) => {
    return (
        <I18nProvider>
            <Gallery
                tabs={tabs}
                images={images}
                defaultTag={defaultTag}
                height={'kitchen'}
            />
        </I18nProvider>

    );
};

export default GalleryKitchen;