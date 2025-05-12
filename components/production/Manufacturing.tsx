"use client";

import style from "./Manufacturing.module.scss"
import Image from "next/image";
import manuOne from "@/public/manufacturing-1-2.png";
import manuTwo from "@/public/manufacturing-3-2.png";
import manuThree from "@/public/manufacturing-4-2.png";
import manuFour from "@/public/manufacturing-5-2.png";
import manuSix from "@/public/manufacturing-6-2.png";
import manuSeven from "@/public/manufacturing-8-2.png";
import "@/styles/wrapper.scss"
import {baskerville} from "@/app/fonts";
import {Fade} from "react-awesome-reveal";
import {useTranslation} from "react-i18next";

const manufacturing = [
    {
        id: '02',
        src: manuOne,
        title: 'stage-title2',
        description: 'stage-description2',
        list: '1',
    },
    {
        id: '03',
        src: manuTwo,
        title: 'stage-title3',
        description: 'stage-description3',
        list: ''
    },
    {
        id: '04',
        src: manuThree,
        title: 'stage-title4',
        description: 'stage-description4',
        list: ''
    },
    {
        id: '05',
        src: manuFour,
        title: 'stage-title4',
        description: 'stage-description4',
        list: ''
    },
    {
        id: '06',
        src: manuSix,
        title: 'stage-title4',
        description: 'stage-description4',
        list: ''
    },
    {
        id: '06',
        src: manuSeven,
        title: 'stage-title4',
        description: 'stage-description4',
        list: ''
    },
]
const Manufacturing = ({background}: {background?: string}) => {

    const { t } = useTranslation('gallery');

    return (
        <section className={style.manu}>
            <div className={background === 'whiteSmoke' ? `wrapper ${style.manu__wrapper} ${style.manu_backgroundSmoke}`
                : `wrapper ${style.manu__wrapper}`}>
                <Fade direction={"up"}>
                    <h2 className={baskerville.className + ' ' + style.manu__title}>
                        {t('production-title0')}
                    </h2>
                </Fade>
                <ul className={style.manu__content}>
                    {manufacturing.map(manu =>
                        <li key={manu.id}>
                            <Fade direction={"up"} triggerOnce={true} fraction={0}>
                                <div  >
                                    <figure className={style.manu__figure}>
                                        <Image src={manu.src}
                                               fill
                                               sizes="(min-width: 200px) 50vw, 100vw"
                                               alt='Etap pracy z klientem'
                                        />
                                    </figure>
                                    <br/>
                                </div>
                            </Fade>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Manufacturing;