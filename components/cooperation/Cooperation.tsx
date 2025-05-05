'use client';

import "@/styles/wrapper.scss"
import style from "./Cooperation.module.scss"
import {baskerville} from "@/app/fonts";
import {useTranslation} from "react-i18next";
import stageOne from "@/public/stages-of-work-1.jpg";
import stageTwo from "@/public/stages-of-work-2.jpg";
import stageThree from "@/public/stages-of-work-3.jpg";
import stageFour from "@/public/stages-of-work-4.jpg";
import Stages from "@/components/stages/Stages";
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
export default function Cooperation() {

    const { t } = useTranslation(['common', 'gallery']);

    return (
        <>
            <section className={style.cooperation}>
                <div className={`wrapper ${style.cooperation__wrapper}`}>
                    <article className={style.cooperation__description}>
                        <h1 className={baskerville.className + ' ' + style.cooperation__title}>
                            {t('cooperation-title')}
                        </h1>
                        <p className={style.cooperation__subtitle}>
                            {t('cooperation-subtitle')}
                        </p>
                        <p className={style.cooperation__subtitle}>
                            {t('cooperation-subtitle-next')}
                        </p>
                        <p className={style.cooperation__subtitle}>
                            {t('cooperation-subtitle-tel')} &nbsp;
                            <a className={style.cooperation__link_right} href="tel:+48511944302">{t('phone')}</a>
                        </p>
                    </article>
                </div>
            </section>
            <Stages stages={stages}/>
        </>
    )
}