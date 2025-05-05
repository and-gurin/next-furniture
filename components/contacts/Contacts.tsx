'use client';

import React from 'react';
import "@/styles/wrapper.scss"
import style from "./Contacts.module.scss"
import {baskerville} from "@/app/fonts";
import {useTranslation} from "react-i18next";
import FormTranslate from "@/components/form-valuation/Form-translate";
import Image from "next/image";
import owner from "@/public/IMG_7687__-removebg-preview.png"
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
export default function Contacts() {

    const {t} = useTranslation(['common', 'gallery']);

    return (
        <>
            <section className={style.contacts}>
                <div className={`wrapper ${style.contacts__wrapper}`}>
                    <div className={style.contacts__description}>

                        <div className={style.contacts__list}>
                            <h1 className={baskerville.className + ' ' + style.contacts__title}>
                                {t('contact-title')}
                            </h1>
                            <figure className={style.contacts__figure}>
                                <Image className={style.contacts__image}
                                       src={owner}
                                       alt='Właściciel firmy'
                                       fill
                                       sizes="(min-width: 200px) 50vw, 100vw"
                                />
                            </figure>
                        </div>
                        <div>
                            <p className={style.contacts__subtitle}>
                                {t('contact-subtitle')}
                            </p>
                            <p className={style.contacts__subtitle}>
                                {t('contact-subtitle-1')}
                            </p>
                        </div>
                        <address className={style.contacts__links}>
                            <div className={style.contacts__link}>
                                <p className={style.contacts__link_left}>{t('contact-phone')}</p>
                                <a className={style.contacts__link_right} href="tel:+48511944302">
                                    {t('phone')}
                                </a>
                            </div>
                            <br/>
                            <div className={style.contacts__link}>
                                <p className={style.contacts__link_left}>{t('contact-e-mail')}</p>
                                <a className={style.contacts__link_right} href="mailto:inhouse.biuro@gmail.com">
                                    {t('e-mail')}
                                </a>
                            </div>
                            <br/>
                            <div className={style.contacts__link}>
                                <p className={style.contacts__link_left}>{t('contact-address')}</p>
                                <a className={style.contacts__link_right}
                                   href="https://maps.app.goo.gl/9vVgANhEb4Hhn8Pr5">
                                    {t('address')}
                                </a>
                            </div>
                        </address>
                    </div>
                    <FormTranslate/>
                </div>
            </section>
            <Stages stages={stages} title={t('stage-title0')}/>
        </>
    )
}