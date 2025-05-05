"use client";

import style from "./Stages.module.scss"
import Image, {StaticImageData} from "next/image";
import "@/styles/wrapper.scss"
import {baskerville} from "@/app/fonts";
import {Fade} from "react-awesome-reveal";
import {useTranslation} from "react-i18next";

export type StagesProps = {
    id: string,
    src?:StaticImageData,
    title: string,
    description: string,
    list?: string[] | string,
}

const Stages = ({background, stages}:
                    {
                        background?: string,
                        stages: StagesProps[],
                    }) => {

    const { t } = useTranslation('gallery');

    return (
        <section className={style.stages}>
            <div className={background === 'whiteSmoke' ? `wrapper ${style.stages_backgroundSmoke}` : `wrapper ${style.stages__wrapper}`}>
                <Fade direction={"up"}>
                    <h2 className={baskerville.className + ' ' + style.stages__title}>
                        {t('stage-title0')}
                    </h2>
                </Fade>
                <ul>
                    {stages.map(stage =>
                        <li key={stage.id}>
                            <Fade direction={"up"} triggerOnce={true} fraction={0}>
                                <div  className={style.stages__content}>
                                    <figure className={style.stages__figure}>
                                        <Image src={stage.src ? stage.src : ''}
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
                                                    {Array.isArray(stage.list) ? stage.list.map(list =>
                                                        <li key={list}>
                                                            {t(list)}
                                                        </li>
                                                    ) : ''}
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