'use client'

import React, { useEffect, useRef} from "react";
import Slider from "react-slick";
import {ImagesProps} from "@/components/gallery/Gallery";
import Image from "next/image";
import "./Slider.scss"

const CustomPaging: React.FC<ImagesProps> = ({ images, setOpenSlider, initialIndex }) => {
    const settings = {
        // customPaging: function (i: number) {
        //     return (
        //         <a className={'thumb__figure'}>
        //             <Image className={'thumb__image'} src={images[i].src} alt={`Slide ${i + 1}`} />
        //         </a>
        //     );
        // },
        // dots: true,
        // dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        initialSlide: initialIndex,
    };
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpenSlider(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [setOpenSlider]);

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sliderRef.current && !sliderRef.current.contains(event.target as Node)) {
                setOpenSlider(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpenSlider]);

    return (
        <div className={'darkBG'} >
            <div className={'centered'}>
                <div className={'modal'}>
                    <div ref={sliderRef} className="slider-container">
                        <Slider {...settings}>
                            {images.map((image) => (
                                <div key={image.id} className={'paging__figure'}>
                                    <Image
                                        className={'paging__image'}
                                        fill
                                        sizes="(min-width: 200px) 50vw, 100vw"
                                        src={image.src}
                                        alt="slider image of furniture"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomPaging;