"use client"

import "@/styles/wrapper.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./Hero.scss"
import kitchenOne500 from "@/public/kitchen-one-929w.jpg"
import kitchenOne555 from "@/public/kitchen-one-555w.jpg"
import kitchenTwo555 from "@/public/kitchen-two-555w.jpg"
import kitchenTwo500 from "@/public/kitchen-two-929w.jpg"
import kitchenThree500 from "@/public/kitchen-three-929w.jpg"
import kitchenThree555 from "@/public/kitchen-three-555w.jpg"
import kitchenFour555 from "@/public/kitchen-four-555w.jpg"
import kitchenFour500 from "@/public/kitchen-four-500w.jpg"
import wardrobe555 from "@/public/wardrobe-555w.jpg"
import Image from "next/image";
import {baskerville} from '@/app/fonts';
import Link from "next/link";

const images = [
    {id: 1, image500: kitchenOne500, image555: kitchenOne555,},
    {id: 2, image500: kitchenTwo500, image555: kitchenTwo555,},
    {id: 3, image500: kitchenThree500, image555: kitchenThree555,},
    {id: 4, image500: kitchenFour500, image555: kitchenFour555,},
    {id: 5, image500: wardrobe555, image555: wardrobe555,},
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
        centerMode: true,
    };

    return (
      <section className='hero'>
          <div className={`wrapper hero__wrapper`}>
              <div className='hero__description'>
                  <h1 className={`${baskerville.className} hero__title`}>Meble na wymiar</h1>
                  <p className='hero__subtitle'>Specjalizujemy się w wykonywaniu wszelkiego rodzaju
                      mebli panelowych na zamówienie, wykorzystując bogate
                      wzornictwo i autentyczne projekty, aby dopasować się do
                      Twojego niepowtarzalnego gustu
                  </p>
                  <Link href='/contacts' className='hero__button'>
                      Skontaktuj się z nami →
                  </Link>
              </div>
              <div className='slider__wrapper'>
                  <div className='slider'>
                      <Slider {...settings}>
                          {images.map((image) =>
                              <div key={image.id}>
                                  <Image
                                      width={555}
                                      height={650}
                                      src={image.image555}
                                      alt="slider image"
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