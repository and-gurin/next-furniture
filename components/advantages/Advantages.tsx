import React from 'react';
import Image from "next/image";
import {baskerville} from "@/app/fonts";
import measuring from "@/public/check-svgrepo-com.svg";
import style from "./Advantages.module.scss"

const advantages = [
    {
        id: 1, src: measuring,
        title: 'Doceniam twój czas.',
        txt: 'Przyjedziemy na pomiar z próbkami materiałów i wykonamy na ' +
            'miejscu projekt 3D Twoich mebli. Bezpłatnie.'
    },
    {
        id: 2,
        src: measuring,
        title: 'Zawsze tam jesteśmy.',
        txt: 'Projektant jest w kontakcie 24/7 na wszystkich etapach pracy.'
    },
    {
        id: 3,
        src: measuring,
        title: 'Nie porzucamy naszych.',
        txt: 'Gwarancja na meble wynosi 2 lata + serwis pogwarancyjny.'
    },
]

const Advantages = () => {
    return (
        <div>
            {advantages.map(adv => {
                return (
                    <div key={adv.id} className={style.advantages}>
                        <Image
                            src={adv.src}
                            alt='Ikona korzyści'
                            width={34}
                            height={34}
                        />
                        <div>
                            <p className={baskerville.className + ' ' + style.advantage}>
                                {adv.title}
                            </p>
                            <p className={style.txt}>
                                {adv.txt}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Advantages;