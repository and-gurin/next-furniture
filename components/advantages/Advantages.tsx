'use client'

import React from 'react';
import Image from "next/image";
import measuring from "@/public/check-svgrepo-com.svg";
import style from "./Advantages.module.scss"
import {useTranslation} from "react-i18next";

const advantages = [
    {
        id: 1,
        src: measuring,
        title: "advantage-title1",
        txt: "advantage-description1"
    },
    {
        id: 2,
        src: measuring,
        title: "advantage-title2",
        txt: "advantage-description2"
    },
    {
        id: 3,
        src: measuring,
        title: "advantage-title3",
        txt: "advantage-description3"
    },
    {
        id: 4,
        src: measuring,
        title: "advantage-title4",
        txt: "advantage-description4"
    },
    {
        id: 5,
        src: measuring,
        title: "advantage-title5",
        txt: "advantage-description5"
    },
]

const Advantages = () => {

    const { t } = useTranslation();

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
                            {/*<p className={baskerville.className + ' ' + style.advantage}>*/}
                            {/*    {t(adv.title)}*/}
                            {/*</p>*/}
                            <p className={style.txt}>
                                {t(adv.txt)}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Advantages;