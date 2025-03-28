'use client'

import style from "./FurnitureDetails.module.scss"
import Image, {StaticImageData} from "next/image";
import {Fade} from "react-awesome-reveal";
import {baskerville} from "@/app/fonts";
import Button from "@/components/button/button";
import AdvantagesTranslate from "@/components/advantages/Advantages-translate";

const FurnitureDetails = ({image, title, description, descriptionAdditional, text}: {
    image: StaticImageData,
    title: string,
    description: string,
    descriptionAdditional?: string,
    text?: string,
}) => {
    return (
        <Fade direction={'up'} triggerOnce={true} fraction={0}>
            <section className={style.details}>
                <div className={`wrapper ${style.details__wrapper}`}>
                    <div className={style.details__grid}>
                        <div className={style.details__description}>
                            <h1 className={baskerville.className + ' ' + style.details__title}>
                                {title}
                            </h1>
                            <p className={style.details__subtitle}>
                                {description}
                            </p>
                            <p className={style.details__subtitle}>
                                {descriptionAdditional}
                            </p>
                            <Button text={text}/>
                            <AdvantagesTranslate/>
                        </div>
                            <figure className={style.details__figure}>
                                <Image className={style.details__image}
                                       src={image.src}
                                       alt='Nowoczesna meble na wymiar'
                                       fill
                                       sizes="(min-width: 200px) 50vw, 100vw"
                                />
                            </figure>
                    </div>
                </div>
            </section>
        </Fade>

    );
};

export default FurnitureDetails;