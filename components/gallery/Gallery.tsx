'use client'

import Image, {StaticImageData} from "next/image";
import {baskerville} from "@/app/fonts";
import style from "./Gallery.module.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import CustomPaging from "@/components/slider/Slider";
import React from "react";
import {useTranslation} from "react-i18next";
import Button from "@/components/button/button";

export type TabsProps = {
    tag: string,
    title: string
}

export type ImageProps = {
    id: string,
    tag: string,
    src: StaticImageData | string,
}

export type ImagesProps = {
    images: ImageProps[],
    setOpenSlider:(isOpen: boolean) => void,
    initialIndex?: number,
}

const Gallery = ({tabs, images, defaultTag, height}: {
    tabs?: TabsProps[],
    images: ImageProps[],
    defaultTag: string,
    height?: string
}) => {

    const [activeTab, setActiveTab] = React.useState(defaultTag);
    const [openSlider, setOpenSlider] = React.useState(false);
    const [initialIndex, setInitialIndex] = React.useState(0);
    const [visibleCount, setVisibleCount] = React.useState(9); // показываем по 9

    const { t } = useTranslation('gallery');

    const tabList = tabs?.map(tab => {
        const finalClassName = activeTab === tab.tag
            ? style.gallery__button + ' ' + style.gallery__button_active
            : style.gallery__button;
        return (
            <li key={tab.title}>
                <span className={finalClassName} onClick={() => {
                    setActiveTab(tab.tag);
                    setVisibleCount(9); // сброс при смене вкладки
                }}>
                    {t(tab.title)}
                </span>
            </li>
        )
    });

    const onClickImageHandler = (imageId: number) => {
        setInitialIndex(imageId);
        setOpenSlider(true);
    };

    const filteredImages = activeTab === 'all'
        ? images
        : images.filter(image => image.tag.includes(activeTab));

    const visibleImages = filteredImages.slice(0, visibleCount);

    const showMoreHandler = () => {
        setVisibleCount(prev => prev + 9);
    };

    const hasMoreImages = visibleCount < filteredImages.length;

    return (
        <section className={style.gallery}>
            <div className={`wrapper ${style.gallery__wrapper}`}>
                <div className={style.gallery__header}>
                    <h2 className={baskerville.className + ' ' + style.gallery__title}>
                        {t('gallery-projects')}
                    </h2>
                    {tabs && <ul className={style.gallery__buttons}>
                        {tabList}
                    </ul>}
                </div>
                <div className={style.gallery__grid}>
                    {visibleImages.map((image, index) => (
                        <div key={image.id} onClick={() => onClickImageHandler(index)}>
                            <figure className={style.gallery__figure}>
                                <Image src={image.src}
                                       className={style.gallery__image}
                                       sizes="(min-width: 100px) 50vw, 100vw"
                                       alt='Nowoczesna meble na wymiar'/>
                            </figure>
                            <div>

                            </div>
                        </div>
                    ))}
                    {openSlider &&
                        <CustomPaging
                            height={height}
                            images={filteredImages}
                            setOpenSlider={setOpenSlider}
                            initialIndex={initialIndex}/>}
                </div>
                {hasMoreImages && (
                    <div className={style.gallery__loadMore}>
                        <Button  title={t('button-title3')}  text={'contact'} onClick={showMoreHandler}/>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;