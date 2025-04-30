"use client"

import "@/styles/wrapper.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./Hero.scss"
import bath2 from "@/public/Custom/Bath-room/bath-12.jpg";
import bath31 from "@/public/Custom/Bath-room/bath-9.jpg";
import bath32 from "@/public/Custom/Bath-room/bath-6-1.jpg";
import bath4 from "@/public/Custom/Bath-room/bath-4.jpg";
import bath51 from "@/public/Custom/Bath-room/bath-15.jpg";
import living1 from "@/public/Custom/Living-room/living-room-1.jpg";
import living21 from "@/public/Custom/Living-room/living-room-2.jpg";
import living22 from "@/public/Custom/Living-room/living-room-3.jpg";
import living41 from "@/public/Custom/Living-room/living-room-5.jpg";
import modern61 from "@/public/Kitchen/Modern/Modern-6-1.jpg";
import modern62 from "@/public/Kitchen/Modern/Modern-6-2.jpg";
import modern71 from "@/public/Kitchen/Modern/Modern-7-1.jpg";
import modern72 from "@/public/Kitchen/Modern/Modern-7-2.jpg";
import wardrobe1 from "@/public/Wardrobe/niche-3.jpg";
import wardrobe4 from "@/public/Wardrobe/niche-6.jpg";
import wardrobe5 from "@/public/Wardrobe/niche-7.jpg";
import swingWardrobe4 from "@/public/Wardrobe/Hallway-4.jpg";
import swingWardrobe5 from "@/public/Wardrobe/Hallway-5.jpg";
import swingWardrobe6 from "@/public/Wardrobe/Hallway-6.jpg";
import kitchen1 from "@/public/hero/hero-block-2.jpg";
import kitchen2 from "@/public/hero/hero-block-3-.jpg";
import kitchen3 from "@/public/hero/hero-block-8.jpg";
import kitchen4 from "@/public/hero/hero-block-9.jpg";
import kitchen5 from "@/public/hero/hero-block-10.jpg";
import kitchen6 from "@/public/hero/hero-block-11.jpg";
import kitchen7 from "@/public/hero/hero-block-12.jpg";
import kitchen8 from "@/public/hero/hero-block-13.jpg";
import kitchen9 from "@/public/hero/hero-block-14.jpg";
import kitchen10 from "@/public/hero/hero-block-16.jpg";
import kitchen11 from "@/public/hero/hero-block-17.jpg";
import kitchen12 from "@/public/hero/hero-block-18.jpg";
import kitchen13 from "@/public/hero/hero-block-20.jpg";
import kitchen14 from "@/public/Kitchen/HIGH-TECH/high-tech-5.jpg";
import Image from "next/image";
import {baskerville} from '@/app/fonts';
import Button from "@/components/button/button";
import AdvantagesTranslate from "@/components/advantages/Advantages-translate";
import {useTranslation} from "react-i18next";
import Modal from "@/components/modal/Modal";
import {useState} from "react";

const images = [
    {id: 171,  src: kitchen14},
    {id: 172,  src: kitchen1},
    {id: 14,  src: kitchen2},
    {id: 115,  src: kitchen3},
    {id: 116,  src: kitchen4},
    {id: 117,  src: kitchen5},
    {id: 231,  src: kitchen6},
    {id: 232,  src: kitchen7},
    {id: 233,  src: kitchen8},
    {id: 18,  src: modern61},
    {id: 19,  src: modern62},
    {id: 20,  src: modern71},
    {id: 21,  src: modern72},
    {id: 211,  src: kitchen9},
    {id: 212,  src: kitchen10},
    {id: 213,  src: kitchen11},
    {id: 214,  src: kitchen12},
    {id: 215,  src: kitchen13},
    {id: 2, src: bath2},
    {id: 4, src: bath32},
    {id: 5,  src: bath4},
    {id: 6,  src: bath51},
    {id: 3, src: bath31},
    {id: 7,  src: living1},
    {id: 8,  src: living21},
    {id: 9,  src: living22},
    {id: 11,  src: living41},
    {id: 22,  src: wardrobe1},
    {id: 24,  src: wardrobe4},
    {id: 25,  src: wardrobe5},
    {id: 31,  src: swingWardrobe5},
    {id: 32,  src: swingWardrobe6},
    {id: 30,  src: swingWardrobe4},
]

const Hero = () => {

    const settingsHero = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'sliderHero'
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { t } = useTranslation('gallery');

    return (
        <>
            <section className='hero'>
                <div className={`wrapper hero__wrapper`}>
                    <div className='hero__description'>
                        <h1 className={`${baskerville.className} hero__title`}>{t('hero-title')}</h1>
                        <p className='hero__subtitle'>
                            {t('hero-subtitle-1')}
                        </p>
                        <Button title={t('button-title2')} description={t('button-description')} text={'contact'} onClick={() => setIsModalOpen(true)}/>
                        <p className={`${baskerville.className} hero__subtitle_1`}>
                            {t('hero-subtitle')}
                        </p>
                        <div>
                            <AdvantagesTranslate/>
                        </div>
                    </div>
                    <div className='slider__wrapper'>
                        <div className='slider'>
                            <Slider {...settingsHero}>
                                {images.map((image) =>
                                    <figure className='hero__figure' key={image.id}>
                                        <Image
                                            className='hero__image'
                                            fill
                                            sizes="(min-width: 200px) 50vw, 100vw"
                                            src={image.src}
                                            alt="Nowoczesna meble na wymiar"
                                        />
                                    </figure>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </>

    )
}

export default Hero;