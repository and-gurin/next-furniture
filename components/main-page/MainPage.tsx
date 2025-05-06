'use client';

import kitchen1 from "@/public/Kitchen/HIGH-TECH/high-tech-1.jpg"
import kitchen2 from "@/public/Kitchen/HIGH-TECH/high-tech-9-2.jpg"
import kitchen3 from "@/public/Kitchen/HIGH-TECH/high-tech-11-2.jpg"
import wardrobe1 from "@/public/Wardrobe/dressing-5.jpg"
import wardrobe2 from "@/public/Wardrobe/bevel-1.jpg"
import wardrobe3 from "@/public/Wardrobe/bedroom-7.jpg"
import custom1 from "@/public/Custom/Bath-room/bath-4.jpg"
import custom2 from "@/public/Custom/Living-room/living-room-6.jpg"
import custom3 from "@/public/Custom/Bed-room/bed-room-4-2.jpg"
import KindOfFurniture from "@/components/kinds/KindOfFurniture";
import Stages from "@/components/stages/Stages";
import HeroTranslate from "@/components/hero/Hero-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider"
import Manufacturing from "@/components/production/Manufacturing";
import stageOne from "@/public/stages-of-work-1.jpg";
import stageTwo from "@/public/stages-of-work-2.jpg";
import stageThree from "@/public/stages-of-work-3.jpg";
import stageFour from "@/public/stages-of-work-4.jpg";
import {useTranslation} from "react-i18next";
import Reviews from "@/components/reviews/Reviews";
import FAQ from "@/components/faq/FAQ";

const kitchenImages = [
    {id: '1', src: kitchen1},
    {id: '2', src: kitchen2},
    {id: '3', src: kitchen3},
]

const wardrobeImages = [
    {id: '1', src: wardrobe1},
    {id: '2', src: wardrobe2},
    {id: '3', src: wardrobe3},
]

const customFurnitureImages = [
    {id: '1', src: custom1},
    {id: '2', src: custom2},
    {id: '3', src: custom3},
]

const kitchenDescriptions = {
    kindOfFurniture: 'page-kitchen-kind',
    link: '/products/kitchens',
    title: 'page-kitchen-title',
    description: 'page-kitchen-description',
    furnitureTypes: [
        {type: 'page-kitchen-type1', link: '/products/modern-kitchen'},
        {type: 'page-kitchen-type2', link: '/products/classic-kitchen'},
    ],
}

const wardrobeDescriptions = {
    kindOfFurniture: 'page-wardrobe-kind',
    link: '/products/wardrobes',
    title: 'page-wardrobe-title',
    description: 'page-wardrobe-description',
    furnitureTypes: [
        {type: 'page-wardrobe-type1', link: '/products/wardrobe'},
        {type: 'page-wardrobe-type2', link: '/products/hallway'},
        {type: 'page-wardrobe-type3', link: '/products/sliding'},
        {type: 'page-wardrobe-type4', link: '/products/bedroom'},
        {type: 'page-wardrobe-type5', link: '/products/niche'},
        {type: 'page-wardrobe-type6', link: '/products/corner'},
        {type: 'page-wardrobe-type7', link: '/products/bevel'},
    ],
}

const customFurnitureDescriptions = {
    kindOfFurniture: 'page-custom-kind',
    link: '/products/customs',
    title: 'page-custom-title',
    description: 'page-custom-description',
    furnitureTypes: [
        {type: 'page-custom-type1', link: '/products/bath-room'},
        {type: 'page-custom-type2', link: '/products/living-room'},
        // {type: 'Meble na wymiar', link: '/products/custom-furniture'},
    ],
}

const stages = [
    {
        id: '01',
        src: stageOne,
        title: 'stage-title1',
        description: 'stage-description1',
        list: '',
    },
    {
        id: '02',
        src: stageTwo,
        title: 'stage-title2',
        description: 'stage-description2',
        list: ['stage-list1', 'stage-list2', 'stage-list3',],
    },
    {
        id: '03',
        src: stageThree,
        title: 'stage-title3',
        description: 'stage-description3',
        list: ''
    },
    {
        id: '04',
        src: stageFour,
        title: 'stage-title4',
        description: 'stage-description4',
        list: ''
    },
]

export default function MainPage () {

    return (
        <>
            <HeroTranslate/>
            <FAQ/>
            <I18nProvider>
                <KindOfFurniture
                    images={kitchenImages}
                    german={true}
                    descriptions={kitchenDescriptions}
                />
            </I18nProvider>
            <I18nProvider>
                <KindOfFurniture
                    location={'image-on-left'}
                    images={wardrobeImages}
                    descriptions={wardrobeDescriptions}
                />
            </I18nProvider>
            <I18nProvider>
                <KindOfFurniture
                    images={customFurnitureImages}
                    custom={true}
                    descriptions={customFurnitureDescriptions}
                />
                <Manufacturing/>
                <Reviews background={'whiteSmoke'}/>
                <Stages stages={stages}/>
            </I18nProvider>
        </>
    )
}
