"use client"

import "@/styles/wrapper.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./Hero.scss"
import bath1 from "@/public/Custom/Bath-room/bath-1.jpg";
import bath2 from "@/public/Custom/Bath-room/bath-12.jpg";
import bath31 from "@/public/Custom/Bath-room/bath-9.jpg";
import bath32 from "@/public/Custom/Bath-room/bath-6-1.jpg";
import bath4 from "@/public/Custom/Bath-room/bath-4.jpg";
import bath51 from "@/public/Custom/Bath-room/bath-15.jpg";
import living1 from "@/public/Custom/Living-room/living-room-1.jpg";
import living21 from "@/public/Custom/Living-room/living-room-2.jpg";
import living22 from "@/public/Custom/Living-room/living-room-3.jpg";
import living3 from "@/public/Custom/Living-room/living-room-4.jpg";
import living41 from "@/public/Custom/Living-room/living-room-5.jpg";
import living42 from "@/public/Custom/Living-room/living-room-19-2.jpg";
import living43 from "@/public/Custom/Living-room/living-room-17-1.jpg";
import modern21 from "@/public/Kitchen/Modern/Modern-2-1.jpg";
import modern22 from "@/public/Kitchen/Modern/Modern-2-2.jpg";
import modern4 from "@/public/Kitchen/Modern/Modern-4.jpg";
import modern5 from "@/public/Kitchen/Modern/Modern-5.jpg";
import modern61 from "@/public/Kitchen/Modern/Modern-6-1.jpg";
import modern62 from "@/public/Kitchen/Modern/Modern-6-2.jpg";
import modern71 from "@/public/Kitchen/Modern/Modern-7-1.jpg";
import modern72 from "@/public/Kitchen/Modern/Modern-7-2.jpg";
import wardrobe1 from "@/public/Wardrobe/wardrobe-1.jpg";
import wardrobe2 from "@/public/Wardrobe/wardrobe-3.jpg";
import wardrobe4 from "@/public/Wardrobe/wardrobe-4.jpg";
import wardrobe5 from "@/public/Wardrobe/wardrobe-7.jpg";
import wardrobe6 from "@/public/Wardrobe/wardrobe-8.jpg";
import swingWardrobe1 from "@/public/Wardrobe/Hallway-1-2.jpg";
import swingWardrobe2 from "@/public/Wardrobe/Hallway-2-3.jpg";
import swingWardrobe3 from "@/public/Wardrobe/Hallway-3-3.jpg";
import swingWardrobe4 from "@/public/Wardrobe/Hallway-4.jpg";
import swingWardrobe5 from "@/public/Wardrobe/Hallway-5.jpg";
import swingWardrobe6 from "@/public/Wardrobe/Hallway-6.jpg";
import Image from "next/image";
import {baskerville} from '@/app/fonts';
import Advantages from "@/components/advantages/Advantages";
import Button from "@/components/button/button";

const images = [
    {id: 17,  src: modern5},
    {id: 14,  src: modern21},
    {id: 15,  src: modern22},
    {id: 22,  src: wardrobe1},
    {id: 23,  src: wardrobe2},
    {id: 1, src: bath1},
    {id: 2, src: bath2},
    {id: 7,  src: living1},
    {id: 8,  src: living21},
    {id: 16,  src: modern4},
    {id: 24,  src: wardrobe4},
    {id: 25,  src: wardrobe5},
    {id: 31,  src: swingWardrobe5},
    {id: 32,  src: swingWardrobe6},
    {id: 9,  src: living22},
    {id: 10,  src: living3},
    {id: 3, src: bath31},
    {id: 4, src: bath32},
    {id: 18,  src: modern61},
    {id: 19,  src: modern62},
    {id: 26,  src: wardrobe6},
    {id: 27,  src: swingWardrobe1},
    {id: 11,  src: living41},
    {id: 12,  src: living42},
    {id: 5,  src: bath4},
    {id: 6,  src: bath51},
    {id: 20,  src: modern71},
    {id: 21,  src: modern72},
    {id: 28,  src: swingWardrobe2},
    {id: 29,  src: swingWardrobe3},
    {id: 13,  src: living43},
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

    return (
        <section className='hero'>
            <div className={`wrapper hero__wrapper`}>
                <div className='hero__description'>
                    <h1 className={`${baskerville.className} hero__title`}>Meble na wymiar</h1>
                    <p className='hero__subtitle'>Witamy w świecie nieograniczonych możliwości
                        dla Twojego wnętrza! Tworzymy spersonalizowane rozwiązania meblowe,
                        które odzwierciedlają Twoją wyjątkowość i styl.
                    </p>
                    <Button/>
                    <div>
                        <Advantages/>
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
    )
}

export default Hero;