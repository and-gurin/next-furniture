import React from 'react';
import FurnitureDetails from "@/components/details/FurnitureDetails";
import modern from "@/public/Kitchen/Modern/Modern-9-1.jpg"
import Stages from "@/components/stages/Stages";

const ModernKitchen = () => {
    return (
        <section>
            <FurnitureDetails
                image={modern}
                title={'Kuchnie w stylu secesyjnym'}
                description={'Eleganckie linie, funkcjonalność i ' +
                    'odważne rozwiązania w każdym szczególe to kuchnie ' +
                    'w stylu secesyjnym.'}/>
            <Stages/>
        </section>
    );
};

export default ModernKitchen;