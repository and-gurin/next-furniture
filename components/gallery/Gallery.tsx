'use client'

import Image, {StaticImageData} from "next/image";
import {baskerville} from "@/app/fonts";
import style from "./Gallery.module.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CustomPaging from "@/components/slider/Slider";
import React from "react";

export type TabsProps = {
    tag: string,
    title: string
}

export type ImageProps = {
    id: string,
    tag: string,
    src: StaticImageData | string
}

export type ImagesProps = {
    images: ImageProps[],
    setOpenSlider:(isOpen: boolean) => void,
    initialIndex?: number,
}

const Gallery = ({tabs, images, title, defaultTag}: {
    tabs: TabsProps[],
    images: ImageProps[],
    title: string,
    defaultTag: string
}) => {

    const [activeTab, setActiveTab] = React.useState(defaultTag);
    const [openSlider, setOpenSlider] = React.useState(false);
    const [initialIndex, setInitialIndex] = React.useState(0);
    const tabList = tabs.map(tab => {
        const finalClassName = activeTab === tab.tag
            ? style.gallery__button + ' ' + style.gallery__button_active
            : style.gallery__button;
        return (
            <li key={tab.title}>
                <span  className={finalClassName} onClick={() => setActiveTab(tab.tag)}>
                    {tab.title}
                </span>
            </li>
        )
    })
    const onClickImageHandler = (imageId: number) => {
      setInitialIndex(imageId);
      setOpenSlider(true)
    }
    const filteredImages = activeTab === 'all' ? images : images.filter((image: { tag: string | string[]; }) => image.tag.includes(activeTab))

    return (
        <section className={style.gallery}>
            <div className={`wrapper ${style.gallery__wrapper}`}>
                <div className={style.gallery__header}>
                    <h2 className={baskerville.className + ' ' + style.gallery__title}>
                        {title}
                    </h2>
                    <ul className={style.gallery__buttons}>
                        {tabList}
                    </ul>
                </div>
                <div className={style.gallery__grid}>
                    {filteredImages.map((image: { id: React.Key | null | undefined; src: string | StaticImport; }, index) => {
                        return (
                            <figure key={image.id}
                                 onClick={() => onClickImageHandler(index)}
                                 className={style.gallery__figure}>
                                <Image src={image.src}
                                       className={style.gallery__image}
                                       sizes="(min-width: 100px) 50vw, 100vw"
                                       alt='Nowoczesna meble na wymiar'/>
                            </figure>
                        )
                    })}
                    {openSlider &&
                        <CustomPaging
                            images={filteredImages}
                            setOpenSlider={setOpenSlider}
                            initialIndex={initialIndex}/>
                    }
                </div>
            </div>
        </section>
    );
};

export default Gallery;