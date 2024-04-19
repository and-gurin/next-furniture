"use client";

import style from "components/details/FurnitureDetails.module.scss"
import Image, {StaticImageData} from "next/image";
import {Fade} from "react-awesome-reveal";

const FurnitureDetails = ({image}: {
    image: StaticImageData,
}) => {
    return (
        <Fade direction={'up'} triggerOnce={true} fraction={0}>
            <section className={style.kind}>
                <div className={`wrapper ${style.kind__wrapper}`}>
                    <div className={style.kind__grid}>
                        <div className={style.kind__description}>
                            
                        </div>
                        <div className={style.kind__images}>
                            {
                                <div className={style.kind__figure_right}>
                                    <Image className={style.kind__image}
                                           src={image.src}
                                           alt='image-of-furniture'
                                           fill
                                           sizes="(min-width: 200px) 50vw, 100vw"
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Fade>

    );
};

export default FurnitureDetails;