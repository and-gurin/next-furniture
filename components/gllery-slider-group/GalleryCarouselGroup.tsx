'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ImageProps } from '@/components/gallery/Gallery';
import './GalleryCarouselGroup.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from "@/components/button/button";
import {useTranslation} from "react-i18next";
import Modal from "@/components/modal/Modal";
import CustomPaging from "@/components/slider/Slider";

type Props = {
    title: string;
    images: ImageProps[];
    height?: string
};

const GalleryCarouselGroup = ({ title, images, height }: Props) => {

    const onClickImageHandler = (imageId: number) => {
        setInitialIndex(imageId);
        setOpenSlider(true);
    };

    const items = images.map((img, index) => (
        <div key={img.id} className="sliderItem">
            <Image
                src={img.src}
                alt="gallery image"
                className="sliderImage"
                sizes="(min-width: 200px) 50vw, 100vw"
                onClick={() => {onClickImageHandler(index)}}
            />
        </div>
    ));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showControls = images.length > 1;
    const [openSlider, setOpenSlider] = React.useState(false);
    const [initialIndex, setInitialIndex] = React.useState(0);


    const { t } = useTranslation('gallery');

    return (
        <>
            <div className="sliderGroup">
                <div className="sliderWrapper">
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        infinite={true}
                        controlsStrategy="default"
                        disableDotsControls={!showControls}
                        disableButtonsControls={!showControls} // отключим стандартные стрелки

                        renderPrevButton={() =>
                            showControls && (
                                <div className="customPrev">
                                    <FaChevronLeft size={16} />
                                </div>
                            )
                        }
                        renderNextButton={() =>
                            showControls && (
                                <div className="customNext">
                                    <FaChevronRight size={16} />
                                </div>
                            )
                        }
                        renderDotsItem={() => (
                            <div/>
                        )}
                    />
                </div>
                <div className={showControls ? 'buttonImage' : `buttonImage buttonImageVisible`}>
                    <Button description={t('button-description')} onClick={() => setIsModalOpen(true)} text={'contact'} small={true} title={t('button-title4')}/>
                </div>
                {openSlider &&
                    <CustomPaging
                        height={height}
                        images={images}
                        setOpenSlider={setOpenSlider}
                        initialIndex={initialIndex}/>}
            </div>

            <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>

    );
};

export default GalleryCarouselGroup;