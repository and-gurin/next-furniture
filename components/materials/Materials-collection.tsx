'use client'

import Image, {StaticImageData} from "next/image";
import {baskerville} from "@/app/fonts";
import style from "./Materials-collection.module.scss"
import React from "react";
import paint from "@/public/Kitchen/Modern/Modern-3.jpg"
import chipboard from "@/public/Kitchen/HIGH-TECH/high-tech-7.jpg"
import wood from "@/public/Kitchen/HIGH-TECH/high-tech-9-2.jpg"
import post from "@/public/Kitchen/Modern/Modern-12-1.jpg"
import slim from "@/public/Materials/egger-kompakt-f222-st76.jpg"
import cori from "@/public/Materials/corian.jpg"
import oak from "@/public/Materials/1550148890-h-600-dab.jpg"
import legra from "@/public/Materials/legrabox.jpg"
import hf2 from "@/public/Materials/HF-1.jpg"
import hk1 from "@/public/Materials/HK.jpg"
import inti from "@/public/Materials/intivo.jpg"
import anta from "@/public/Materials/antaro.jpg"
import meta from "@/public/Materials/metabox.jpg"
import hl2 from "@/public/Materials/HL-2.jpg"
import hs1 from "@/public/Materials/HS.jpg"
import meri from "@/public/Materials/merivobox.jpg"
import move from "@/public/Materials/movento.jpg"
import tandem from "@/public/Materials/tandem.jpg"
import {useTranslation} from "react-i18next";
import I18nProvider from "@/components/I18nProvider/I18nProvider"

export type ImageProps = {
    id: number,
    src: StaticImageData,
}

export type MaterialsProps = {
    images: ImageProps[],
    title: string,
    description: string,
}

const facades = [
    {
        images: [{id: 1, src: paint}],
        title: 'material-facades-title1',
        description: 'material-facades-description1',
    },
    {
        images: [{id: 1, src: chipboard}],
        title: 'material-facades-title2',
        description: 'material-facades-description2',
    },
    {
        images: [{id: 1, src: wood}],
        title: 'material-facades-title3',
        description: 'material-facades-description3',
    },
]

const worktop = [
    {
        images: [{id: 1, src: post}],
        title: 'material-worktop-title1',
        description: 'material-worktop-description1',
    },
    {
        images: [{id: 1, src: slim}],
        title: 'material-worktop-title2',
        description: 'material-worktop-description2',
    },
    {
        images: [{id: 1, src: cori}],
        title: 'material-worktop-title3',
        description: 'material-worktop-description3',
    },
    {
        images: [{id: 1, src: oak}],
        title: 'material-worktop-title4',
        description: 'material-worktop-description4',
    },
]

const lift = [
    {
        images: [{id: 2, src: hf2},],
        title: 'material-lift-title1',
        description: 'material-lift-description1',
    },
    {
        images: [{id: 1, src: hs1}],
        title: 'material-lift-title2',
        description: 'material-lift-description2',
    },
    {
        images: [{id: 1, src: hl2}],
        title: 'material-lift-title3',
        description: 'material-lift-description3',
    },
    {
        images: [{id: 1, src: hk1},],
        title: 'material-lift-title4',
        description: 'material-lift-description4',
    },
]

const box = [
    {
        images: [{id: 2, src: meri},],
        title: 'material-box-title1',
        description: 'material-box-description1',
    },
    {
        images: [{id: 1, src: inti}],
        title: 'material-box-title2',
        description: 'material-box-description2',
    },
    {
        images: [{id: 1, src: anta}],
        title: 'material-box-title3',
        description: 'material-box-description3',
    },
    {
        images: [{id: 1, src: legra},],
        title: 'material-box-title4',
        description: 'material-box-description4',
    },
    {
        images: [{id: 1, src: meta},],
        title: 'material-box-title5',
        description: 'material-box-description5',
    },
    {
        images: [{id: 1, src: tandem},],
        title: 'material-box-title6',
        description: 'material-box-description6',
    },
    {
        images: [{id: 1, src: move},],
        title: 'material-box-title7',
        description: 'material-box-description7',
    },
]

const MaterialsCollection = () => {

    const { t } = useTranslation('gallery');

    return (
        <section className={style.collection}>
            <div className={`wrapper ${style.collection__wrapper}`}>
                <I18nProvider>
                    <Material title={t('material-title1')} materials={facades}/>
                </I18nProvider>
                <I18nProvider>
                    <Material title={t('material-title2')} materials={worktop}/>
                </I18nProvider>
                <I18nProvider>
                    <Material title={t('material-title3')} materials={lift}/>
                </I18nProvider>
                <I18nProvider>
                    <Material title={t('material-title4')} materials={box}/>
                </I18nProvider>
            </div>
        </section>
    );
};

export const Material = ({title, materials}: {
    title: string,
    materials: MaterialsProps[]
}) => {

    const { t } = useTranslation('gallery');

    return (
        <>
            <div className={style.collection__header}>
                <h2 className={baskerville.className + ' ' + style.collection__title}>
                    {t(title)}
                </h2>
            </div>
            <div className={style.collection__grid}>
                {materials.map((material) => {
                    return (<div key={material.title}>
                            <div className={style.collection__images}>
                                {material.images.map(image => {
                                    return (
                                        <figure
                                            key={image.id}
                                            className={style.collection__figure}>
                                            <Image src={image.src}
                                                   className={style.collection__image}
                                                   sizes="(min-width: 100px) 50vw, 100vw"
                                                   alt='Nowoczesna meble na wymiar'/>
                                        </figure>
                                    )
                                })}
                            </div>
                            <h3 className={baskerville.className + ' ' + style.collection__subtitle}>
                                {t(material.title)}
                            </h3>
                            <p >
                                {t(material.description)}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default MaterialsCollection;