"use client";

import style from "./FurnitureDetails.module.scss"
import Image, {StaticImageData} from "next/image";
import {Fade} from "react-awesome-reveal";
import {baskerville} from "@/app/fonts";
import Button from "@/components/button/button";
import Advantages from "@/components/advantages/Advantages";

const FurnitureDetails = ({image, title, description}: {
    image: StaticImageData,
    title: string,
    description: string,
}) => {
    return (
        <Fade direction={'up'} triggerOnce={true} fraction={0}>
            <section className={style.details}>
                <div className={`wrapper ${style.details__wrapper}`}>
                    <div className={style.details__grid}>
                        <div className={style.details__description}>
                            <h2 className={baskerville.className + ' ' + style.details__title}>
                                {title}
                            </h2>
                            <p className={style.details__subtitle}>
                                {description}
                            </p>
                            <Button/>
                            <Advantages/>
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