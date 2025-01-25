'use client'

import React, {useEffect, useRef} from "react";
import Slider from "react-slick";
import {ImageProps} from "@/components/gallery/Gallery";
import Image from "next/image";
import "./Slider.scss"
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const CustomPaging = ({
                          images,
                          setOpenSlider,
                          initialIndex,
                          height
                      }: {
    images: ImageProps[],
    setOpenSlider: (isOpen: boolean) => void,
    initialIndex?: number,
    height?: string
}) => {

    const settingsGallery = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        initialSlide: initialIndex,
        adaptiveHeight: true,
        className: 'sliderGallery'
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
        <>
            <div className={'darkBG'}></div>
            <div className={'centered'}>
                <div ref={sliderRef} className="slider-container">
                    <Slider {...settingsGallery}>
                        {images.map((image) => (
                            <figure key={image.id}
                                    className={height === 'kitchen' ? 'paging__figure_kitchen' : 'paging__figure_wardrobe'}>
                                <Image
                                    className={'paging__image'}
                                    fill
                                    sizes="(min-width: 200px) 50vw, 100vw"
                                    src={image.src}
                                    alt="Nowoczesna meble na wymiar"
                                />
                            </figure>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default CustomPaging;