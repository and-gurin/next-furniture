'use client'

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import GalleryCarouselGroup from "@/components/gllery-slider-group/GalleryCarouselGroup"; // добавь
import { baskerville } from "@/app/fonts";
import style from "./Gallery.module.scss";
import Button from "@/components/button/button";
import Manufacturing from "@/components/production/Manufacturing";
import Reviews from "@/components/reviews/Reviews";
import Stages from "@/components/stages/Stages";
import FAQ from "@/components/faq/FAQ";
import stageOne from "@/public/stages-of-work-1.jpg";
import stageTwo from "@/public/stages-of-work-2.jpg";
import stageThree from "@/public/stages-of-work-3.jpg";
import stageFour from "@/public/stages-of-work-4.jpg";
import {StaticImageData} from "next/image";
import FormValuation from "@/components/form-valuation/FormValuation";
import ScrollToFormButton from "@/components/scroll-to-form-button/ScrollToFormButton";

export type TabsProps = {
    tag: string,
    title: string
}

export type ImageProps = {
    id: string;
    tag: string;       // 'kitchen' | 'wardrobe' | ...
    group: string;     // например, 'kitchen-1', 'kitchen-2'
    src: StaticImageData;
};

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

const Gallery = ({ tabs, images, defaultTag, height}: {
    tabs?: TabsProps[],
    images: ImageProps[],
    defaultTag: string,
    height?: string
}) => {
    const [activeTab, setActiveTab] = useState(defaultTag);
    const [visibleCount, setVisibleCount] = React.useState(6);

    const { t } = useTranslation('gallery');

    const filteredImages = activeTab === 'all'
        ? images
        : images.filter(img => img.tag === activeTab);

    const visibleImages = filteredImages.slice(0, visibleCount);

    const grouped = visibleImages.reduce((acc: Record<string, ImageProps[]>, img) => {
        if (!acc[img.group]) acc[img.group] = [];
        acc[img.group].push(img);
        return acc;
    }, {});

    const showMoreHandler = () => {
        setVisibleCount(prev => prev + 9);
    };

    const hasMoreImages = visibleCount < filteredImages.length;

    return (
        <>
            <section className={style.gallery}>
                <div className={`wrapper ${style.gallery__wrapper}`}>
                    <div className={style.gallery__header}>
                        <h2 className={`${baskerville.className} ${style.gallery__title}`}>
                            {t('gallery-projects')}
                        </h2>
                        {tabs && (
                            <ul className={style.gallery__buttons}>
                                {tabs.map(tab => (
                                    <li key={tab.title}>
                    <span
                        className={
                            activeTab === tab.tag
                                ? `${style.gallery__button} ${style.gallery__button_active}`
                                : style.gallery__button
                        }
                        onClick={() => setActiveTab(tab.tag)}
                    >
                      {t(tab.title)}
                    </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className={style.gallery__grid}>
                        {Object.entries(grouped).map(([groupId, groupImages]) => (
                            <div key={groupId} className={style.sliderGroup}>
                                    <GalleryCarouselGroup title={groupId} images={groupImages} height={height}/>
                            </div>
                        ))}
                    </div>
                    {hasMoreImages && (
                        <div className={style.gallery__loadMore}>
                            <Button  title={t('button-title3')}  text={'contact'} onClick={showMoreHandler}/>
                        </div>
                    )}
                </div>
            </section>
            <Manufacturing background={"whiteSmoke"} />
            <Reviews/>
            <Stages stages={stages} background={"whiteSmoke"} />
            <FAQ />
            <FormValuation mode={'bottom'}/>
            <ScrollToFormButton/>
        </>
    );
};

export default Gallery;
