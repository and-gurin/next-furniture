"use client"

import "@/styles/wrapper.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./Hero.scss"
import kitchenOne500 from "@/public/Kitchen/Modern/Modern-1.jpg"
import kitchenTwo500 from "@/public/Kitchen/Modern/Modern-7-2.jpg"
import kitchenThree500 from "@/public/Kitchen/Modern/Modern-12-2.jpg"
import kitchenFour500 from "@/public/Kitchen/HIGH-TECH/high-tech-5.jpg"
import wardrobe555 from "@/public/Kitchen/HIGH-TECH/high-tech-6-3.jpg"
import Image from "next/image";
import {baskerville} from '@/app/fonts';
import Link from "next/link";
import Advantages from "@/components/advantages/Advantages";

const images = [
    {id: 1, src: kitchenOne500},
    {id: 2, src: kitchenTwo500},
    {id: 3, src: kitchenThree500},
    {id: 4, src: kitchenFour500},
    {id: 5, src: wardrobe555},
]

const Hero = () => {

    const settings = {
        className: 'center',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
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

                  <Link href='/contacts' className='hero__button'>
                      Skontaktuj się z nami →
                  </Link>
                  <div>
                      <Advantages/>
                  </div>
              </div>
              <div className='slider__wrapper'>
                  <div className='slider'>
                      <Slider {...settings}>
                          {images.map((image) =>
                              <div className='hero__figure' key={image.id}>
                                  <Image
                                      fill
                                      className='hero__image'
                                      sizes="(min-width: 200px) 50vw, 100vw"
                                      src={image.src}
                                      alt="slider image of furniture"
                                  />
                              </div>
                          )}
                      </Slider>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Hero;