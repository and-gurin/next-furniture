import Hero from "@/components/hero/Hero";
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
        kindOfFurniture: 'kuchnia',
        title: 'Kto dziś robi śniadanie?',
        description: 'To nie ma znaczenia. W kuchni na zamówienie każdy, kto chce przygotować ' +
            'śniadanie, poczuje się jak szef kuchni. W Twojej kuchni ' +
            'uwzględnimy preferencje każdego członka rodziny.',
        furnitureTypes: [
            {type: 'Kuchnie w nowoczesnym stylu', link: '/products/modern-kitchen'},
            {type: 'Kuchnie w stylu klasycznym', link: '/products/classic-kitchen'},
            {type: 'Kuchnie w stylu High-Tech', link: '/products/high-tech-kitchen'},
        ],
    }

const wardrobeDescriptions = {
    kindOfFurniture: 'szafy',
    title: 'Widziałeś moje skarpetki?',
    description: 'Wypowiedz totalną wojnę z bałaganem. ' +
        'Od teraz i na zawsze każda rzecz jest na swoim miejscu. ' +
        'Tylko w szafie wykonanej według indywidualnego projektu.',
    furnitureTypes: [
        {type: 'Garderoby', link: '/products/wardrobe'},
        {type: 'Szafy z drzwiami skrzydłowymi', link: '/products/swing'},
        {type: 'Szafy z drzwiami przesuwnymi', link: '/products/sliding'},
    ],
}

const customFurnitureDescriptions = {
    kindOfFurniture: 'meble na wymiar',
    title: 'Twoje pomysły są naszą pracą.',
    description: 'Od pomysłu do realizacji - ' +
        'stworzymy Meble, które idealnie pasują do Twojej przestrzeni i ' +
        'stylu życia.',
    furnitureTypes: [
        {type: 'Łazienka', link: '/products/bath-room'},
        {type: 'Salon', link: '/products/living-room'},
        {type: 'Meble na wymiar', link: '/products/custom-furniture'},
    ],
}

export default function Home() {
    return (
        <>
            <Hero/>
            <KindOfFurniture images={kitchenImages} descriptions={kitchenDescriptions}/>
            <KindOfFurniture location={'image-on-left'} images={wardrobeImages} descriptions={wardrobeDescriptions}/>
            <KindOfFurniture images={customFurnitureImages} descriptions={customFurnitureDescriptions}/>
            <Stages/>
        </>
    )
}
