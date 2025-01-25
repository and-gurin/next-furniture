import kitchen1 from "@/public/Kitchen/Сollage/high-tech-1.jpg"
import kitchen2 from "@/public/Kitchen/Сollage/Classic-3.jpg"
import kitchen3 from "@/public/Kitchen/Сollage/Modern-1.jpg"
import wardrobe1 from "@/public/Wardrobe/Collage/Wardrobe-8.jpg"
import wardrobe2 from "@/public/Wardrobe/Collage/Sliding-wardrobe-3.jpg"
import wardrobe3 from "@/public/Wardrobe/Collage/Swing-wardrobe-11.jpg"
import custom1 from "@/public/Custom/Collage/bath-4.jpg"
import custom2 from "@/public/Custom/Collage/living-room-1.jpg"
import custom3 from "@/public/Custom/Collage/bed-room-3.jpg"
import KindOfFurniture from "@/components/kinds/KindOfFurniture";
import Stages from "@/components/stages/Stages";
import HeroTranslate from "@/components/hero/Hero-translate";
import I18nProvider from "@/components/I18nProvider/I18nProvider"


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
    kindOfFurniture: 'szafa',
    link: '/products/wardrobes',
    title: 'Widziałeś moje skarpetki?',
    description: '',
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
        {type: 'Łazienka', link: '/products/bath-room'},
        {type: 'Salon', link: '/products/living-room'},
        // {type: 'Meble na wymiar', link: '/products/custom-furniture'},
    ],
}

export default function Home() {
    return (
        <>
            <HeroTranslate/>
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
                <Stages/>
            </I18nProvider>
        </>
    )
}
