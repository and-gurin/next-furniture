"use client";

import style from "./Stages.module.scss"
import Image from "next/image";
import stageOne from "@/public/stages-of-work-1.jpg";
import stageTwo from "@/public/stages-of-work-2.jpg";
import stageThree from "@/public/stages-of-work-3.jpg";
import stageFour from "@/public/stages-of-work-4.jpg";
import "@/styles/wrapper.scss"
import {baskerville} from "@/app/fonts";
import {Fade} from "react-awesome-reveal";
import Link from "next/link";
import {useTranslation} from "react-i18next";

const stages = [
    {
        id: '02',
        src: stageTwo,
        title: 'stage-title2',
        description: 'stage-description2',
        list: '1',
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
const Stages = ({background}: {background?: string}) => {

    const { t } = useTranslation('gallery');

    return (
        <section className={background === 'whiteSmoke' ? style.stages + ' ' + style.stages_backgroundSmoke : style.stages}>
            <div className={`wrapper ${style.stages__wrapper}`}>
                <Fade direction={"up"}>
                    <h2 className={baskerville.className + ' ' + style.stages__title}>
                        {t('stage-title0')}
                    </h2>
                </Fade>
                <ul>
                    <li>
                        <Fade direction={"up"} triggerOnce={true} fraction={0}>
                            <div  className={style.stages__content}>
                                <figure className={style.stages__figure}>
                                    <Image src={stageOne}
                                           fill
                                           sizes="(min-width: 200px) 50vw, 100vw"
                                           alt='Etap pracy z klientem'
                                    />
                                </figure>
                                <div className={style.stages__description}>
                                    <div className={style.stages__number}>
                                        <p className={baskerville.className + ' ' + style.stages__subtitle}>{'01'}</p>
                                        <p className={style.stages__verticalLine}></p>
                                    </div>
                                    <div>
                                        <p className={baskerville.className + ' ' + style.stages__subtitle}>
                                            <Link className={style.stages__link} href={'/contacts'}>
                                                {t('stage-title1')}
                                            </Link>,
                                        </p>
                                        <p className={style.stages__description}>
                                            {t('stage-description1')}
                                        </p>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </li>
                    {stages.map(stage =>
                        <li key={stage.id}>
                            <Fade direction={"up"} triggerOnce={true} fraction={0}>
                                <div  className={style.stages__content}>
                                    <figure className={style.stages__figure}>
                                        <Image src={stage.src}
                                               fill
                                               sizes="(min-width: 200px) 50vw, 100vw"
                                               alt='Etap pracy z klientem'
                                        />
                                    </figure>
                                    <div className={style.stages__description}>
                                        <div className={style.stages__number}>
                                            <p className={baskerville.className + ' ' + style.stages__subtitle}>{stage.id}</p>
                                            <p className={style.stages__verticalLine}></p>
                                        </div>
                                        <div>
                                            <p className={baskerville.className + ' ' + style.stages__subtitle}>
                                                {t(stage.title)}
                                            </p>
                                            <p className={style.stages__description}>
                                                {t(stage.description)}
                                            </p>
                                            <br/>
                                            {stage.list &&
                                                <ul className={style.stages_list}>
                                                    <li>{t('stage-list1')}</li>
                                                    <li>{t('stage-list2')}</li>
                                                    <li>{t('stage-list3')}</li>
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Stages;