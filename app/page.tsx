import Hero from "@/components/hero/Hero";
import kitchen1 from "@/public/Kitchen/Сollage/high-tech-1.jpg"
import kitchen2 from "@/public/Kitchen/Сollage/Modern-2-2.jpg"
import kitchen3 from "@/public/Kitchen/Сollage/Modern-1.jpg"
import KindOfFurniture from "@/components/kinds/KindOfFurniture";
import Stages from "@/components/stages/Stages";


const kitchenImages = [
    {id: '1', src: kitchen1},
    {id: '2', src: kitchen2},
    {id: '3', src: kitchen3},
]

const kitchenDescriptions = {
        kindOfFurniture: 'kuchnia',
        title: 'Kto dziś robi śniadanie?',
        description: 'To nie ma znaczenia. W kuchni na zamówienie każdy, kto chce przygotować ' +
            'śniadanie, poczuje się jak szef kuchni. W Twojej kuchni ' +
            'uwzględnimy preferencje każdego członka rodziny.',
        furnitureTypes: ['Kuchnie w nowoczesnym stylu', 'Kuchnie w stylu klasycznym', 'Kuchnie w stylu High-Tech',],
    }

export default function Home() {
    return (
        <>
            <Hero/>
            <KindOfFurniture images={kitchenImages} descriptions={kitchenDescriptions}/>
            <Stages/>
        </>
    )
}
