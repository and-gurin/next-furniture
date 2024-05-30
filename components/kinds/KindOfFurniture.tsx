"use client";

import style from "./KindOfFurniture.module.scss"
import arrowRight from "@/public/right-arrow.svg"
import Image, {StaticImageData} from "next/image";
import {baskerville} from "@/app/fonts";
import Link from "next/link";
import {Fade} from "react-awesome-reveal";

export type ImagePropsType = {
    id: string,
    src: StaticImageData,
}

export type FurnitureTypes = {
    type: string,
    link: string
}

export type FurnitureDescriptionType = {
    kindOfFurniture: string,
    title: string,
    description: string,
    furnitureTypes: FurnitureTypes[],
}

const KindOfFurniture = ({images, descriptions, location}: {
    images: ImagePropsType[],
    descriptions: FurnitureDescriptionType,
    location?: string
}) => {
    return (

            <section className={style.kind}>
                <Fade direction={'up'} triggerOnce={true} fraction={0}>
                <div className={`wrapper ${style.kind__wrapper}`}>
                    <div className={location !== 'image-on-left'
                        ? style.kind__grid
                        : style.kind__grid + ' ' + style.kind__grid_left}>
                        <div className={style.kind__description}>
                            <p className={baskerville.className + ' ' + style.kind__copy}>
                                {descriptions.kindOfFurniture}
                            </p>
                            <div>
                                <h2 className={baskerville.className + ' ' + style.kind__title}>
                                    {descriptions.title}
                                </h2>
                                <p className={style.kind__subtitle}>
                                    {descriptions.description}
                                </p>
                                <ul>
                                    {descriptions.furnitureTypes.map(type => {
                                        return <li key={type.type}>
                                            <Fade  direction={location !== 'image-on-left'
                                                ? 'left' : 'right'}>
                                                <Link href={type.link} className={style.kind__details}>
                                                    <p>{type.type}</p>
                                                    <div className={style.kind__more}>
                                                        <p className={baskerville.className + ' ' + style.kind__details_copy}>
                                                            Więcej
                                                        </p>
                                                        <Image src={arrowRight}
                                                               alt='arrow-right'
                                                               width='40'
                                                               height='16'
                                                        />
                                                    </div>
                                                </Link>
                                            </Fade>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className={style.kind__images}>
                            {images.map(image => {
                                return (
                                    <div key={image.id} className={location !== 'image-on-left'
                                        ? style.kind__figure_right : style.kind__figure_left}>
                                        <Image className={style.kind__image}
                                               src={image.src}
                                               alt='image-of-furniture'
                                               fill
                                               sizes="(min-width: 200px) 50vw, 100vw"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                </Fade>
            </section>
    );
};

export default KindOfFurniture;