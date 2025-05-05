"use client";

import "@/styles/wrapper.scss"
import NavItem from "@/components/navigation/Navigation";
import style from "./Header.module.scss";
import Image from "next/image";
import arrowDown from "@/public/arrow-down-339-svgrepo-com.svg";
import {raleWay} from '@/app/fonts';
import Logo from "@/components/logo/Logo";
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import kitchen1 from "@/public/Kitchen/Modern/Modern-8.jpg";
import kitchen2 from "@/public/Kitchen/Classic/Classic-3.jpg";
import kitchen3 from "@/public/Kitchen/Nobilia/nobilia-5.jpg";
import wardrobe1 from "@/public/Wardrobe/dressing-3-1.jpg";
import wardrobeSliding from "@/public/Wardrobe/Sliding-wardrobe-3.jpg";
import wardrobeSwing from "@/public/Wardrobe/Hallway-9-1.jpg";
import wardrobeBedroom from "@/public/Wardrobe/bedroom-3.jpg";
import wardrobeNiche from "@/public/Wardrobe/Sliding-wardrobe-1.jpg";
import wardrobeCorner from "@/public/Wardrobe/corner-3.jpg";
import wardrobeBevel from "@/public/Wardrobe/bevel-1.jpg";
import bathRoom from "@/public/Custom/Bath-room/bath-4.jpg";
import livingRoom from "@/public/Custom/Living-room/living-room-6.jpg";
import customRoom from "@/public/Custom/Bed-room/bed-room-4-2.jpg";
import burger from "@/public/icons8-menu.svg";
import close from "@/public/close-bold-svgrepo-com.svg";
import arrowRight from "@/public/right-arrow-svgrepo-com.svg";
import arrowLeft from "@/public/left-arrow-svgrepo-com.svg";
import handset from "@/public/handset-svgrepo-com.svg";
import mail from "@/public/mail_pye5zxoeu4ge.svg";
import {useTranslation} from "react-i18next";
import LanguageSelector from "@/components/language-selector/LanguageSelector";
import Modal from "@/components/modal/Modal";

const links = [
    {id: 1, title: 'header-title1', href: '/materials'},
    {id: 2, title: 'header-title2', href: '/contacts'},
    {id: 3, title: 'header-title3', href: '/cooperation'},
]

const Header = () => {

    const [open, setOpen] = useState(false);
    const [productImage, setProductImage] = useState('');
    const [openBurger, setOpenBurger] = useState(false);
    const [openBottomMenu, setOpenBottomMenu] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClickBottomMenuLinks = () => {
        setOpenBottomMenu(!openBottomMenu);
        setOpenBurger(!openBurger)
    }

    const { t } = useTranslation('gallery');

    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpen]);

    const burgerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setOpenBurger(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpenBurger]);



    return (
        <>
            <header className={raleWay.className + ' ' + style.header} ref={headerRef}>
                <div className={`wrapper ${style.header__wrapper}`} >
                    <Logo/>
                    <div className={style.header__flag}>
                        {!openBurger &&
                            <>
                                <a href="tel:+48511944302" className={style.header__phone}>
                                    <Image
                                        src={handset}
                                        width='28'
                                        height='28'
                                        alt='Słuchawka'
                                    />
                                </a>
                                <div className={style.header__mail}>
                                    <span>8:00</span>
                                    <span>19:00</span>
                                </div>
                            </>

                        }
                        <span onClick={() => setIsModalOpen(!isModalOpen)} className={style.header__phone}>
                                <Image
                                    src={mail}
                                    width='36'
                                    height='36'
                                    alt='mail'
                                />
                            </span>
                        <div >
                            <LanguageSelector/>
                        </div>
                    </div>
                    <nav className={style.header__navigation}>
                        <div className={style.header__products}
                             onClick={() => setOpen(!open)}>
                            {t('header-products')}
                            <Image
                                className={open ? style.header__arrow : style.header__arrow_up}
                                src={arrowDown}
                                width='16'
                                height='16'
                                alt='Strzałka w dół'
                            />
                        </div>
                        <ul className={style.header__links}>
                            <NavItem links={links}/>
                            {/*<li>*/}
                            {/*    <Link href={'/valuation'}>*/}
                            {/*        <b>*/}
                            {/*            {'Wycena 24h'}*/}
                            {/*        </b>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        </ul>
                    </nav>
                    <div className={style.header__burger} onClick={() => setOpenBurger(!openBurger)}>
                        <Image
                            src={openBurger ? close : burger}
                            alt='Burger menu'
                            width='32'
                            height='32'
                        />
                    </div>
                </div>
                {openBurger && !openBottomMenu &&
                    <nav className={style.header__navigation_burger} ref={burgerRef}>
                        <div className={style.header__products}
                             onClick={() => setOpenBottomMenu(!openBottomMenu)}>
                            {t('header-products')}
                            <Image
                                src={arrowRight}
                                width='16'
                                height='16'
                                alt='Strzałka w prawo'
                            />
                        </div>
                        <ul className={style.header__links_burger}>
                            <NavItem links={links} openMenu={() => setOpenBurger(!openBurger)}/>
                            {/*<li onClick={() => setOpenBurger(!openBurger)}>*/}
                            {/*    <Link href={'/valuation'}>*/}
                            {/*        <b>*/}
                            {/*            {'Wycena 24h'}*/}
                            {/*        </b>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}

                        </ul>
                        <div className={style.header__mail}>
                            <a href="tel:+48511944302" className={style.header__phone}>
                                <Image
                                    src={handset}
                                    width='24'
                                    height='24'
                                    alt='Słuchawka'
                                />
                                {t('header-times')}
                            </a>
                        </div>
                    </nav>
                }
                <div className={!openBottomMenu ? style.header__bottomMenu
                    : style.header__bottomMenu + ' ' +style.header__bottomMenu_burger}>
                    <div className={style.header__arrowLeft}  onClick={() => setOpenBottomMenu(!openBottomMenu)}>
                        <Image src={arrowLeft}
                               alt='Strzałka w lewo'
                               width='40'
                               height='16'
                        />
                        {t('header-return')}
                    </div>
                    <p className={style.header__horizontalLLine}></p>
                    <div className={style.header__categories}>
                        <Link
                            href={'/products/modern-kitchen'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link1')}
                        </Link>
                        <Link
                            href={'/products/classic-kitchen'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link2')}
                        </Link>
                        <Link
                            href={'/products/german-kitchen'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link3')}
                        </Link>
                    </div>
                    <div className={style.header__categories}>
                        <Link
                            href={'/products/wardrobe'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link4')}
                        </Link>
                        <Link
                            href={'/products/hallway'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link5')}
                        </Link>
                        <Link
                            href={'/products/sliding'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link6')}
                        </Link>
                        <Link
                            href={'/products/bedroom'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link7')}
                        </Link>
                        <Link
                            href={'/products/niche'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link8')}
                        </Link>
                        <Link
                            href={'/products/corner'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link9')}
                        </Link>
                        <Link
                            href={'/products/bevel'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link10')}
                        </Link>
                    </div>
                    <div className={style.header__categories}>
                        <Link
                            href={'/products/bath-room'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link11')}
                        </Link>
                        <Link
                            href={'/products/living-room'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link12')}
                        </Link>
                        <Link
                            href={'/products/custom-furniture'}
                            className={style.header__category}
                            onClick={onClickBottomMenuLinks}
                        >
                            {t('header-link13')}
                        </Link>
                    </div>
                </div>
                <div className={!open ? style.header__bottomMenu
                    : style.header__bottomMenu + ' ' +style.header__bottomMenu_active}>
                    <div className={style.header__categories}>
                        <Link
                            href={'/products/modern-kitchen'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('kitchen1')}
                        >
                            {t('header-link1')}
                        </Link>
                        <Link
                            href={'/products/classic-kitchen'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('kitchen2')}
                        >
                            {t('header-link2')}
                        </Link>
                        <Link
                            href={'/products/german-kitchen'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('kitchen3')}
                        >
                            {t('header-link3')}
                        </Link>
                    </div>
                    <div className={style.header__categories}>
                        <Link
                            href={'/products/wardrobe'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('wardrobe1')}
                        >
                            {t('header-link4')}
                        </Link>
                        <Link
                            href={'/products/hallway'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('wardrobe2')}
                        >
                            {t('header-link5')}
                        </Link>
                        <Link
                            href={'/products/sliding'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('wardrobe3')}
                        >
                            {t('header-link6')}
                        </Link>
                        <Link
                            href={'/products/bedroom'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('wardrobe4')}
                        >
                            {t('header-link7')}
                        </Link>
                        <Link
                            href={'/products/niche'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('wardrobe5')}
                        >
                            {t('header-link8')}
                        </Link>
                        <Link
                            href={'/products/corner'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('wardrobe6')}
                        >
                            {t('header-link9')}
                        </Link>
                        <Link
                            href={'/products/bevel'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('wardrobe7')}
                        >
                            {t('header-link10')}
                        </Link>
                    </div>
                    <div className={style.header__categories}>
                        <Link
                            href={'/products/bath-room'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('bath')}
                        >
                            {t('header-link11')}
                        </Link>
                        <Link
                            href={'/products/living-room'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('living')}
                        >
                            {t('header-link12')}
                        </Link>
                        <Link
                            href={'/products/custom-furniture'}
                            className={style.header__category}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setProductImage('custom')}
                        >
                            {t('header-link13')}
                        </Link>
                    </div>
                    <div className={style.header__figure}>
                        {
                            productImage === 'kitchen1'
                                ? <Image className={style.header__image} src={kitchen1} alt={'Nowoczesna kuchnia na wymiar'}/>
                                : productImage === 'kitchen2'
                                    ? <Image className={style.header__image} src={kitchen2} alt={'Klasyczna kuchnia na wymiar'}/>
                                    : productImage === 'kitchen3'
                                        ? <Image className={style.header__image} src={kitchen3} alt={'High tech kuchnia na wymiar'}/>
                                        : productImage === 'wardrobe1'
                                            ? <Image className={style.header__image} src={wardrobe1} alt={'Garderoba na wymiar'}/>
                                            : productImage === 'wardrobe2'
                                                ? <Image className={style.header__image} src={wardrobeSwing} alt={'Szafa na wymiar'}/>
                                                : productImage === 'wardrobe3'
                                                    ? <Image className={style.header__image} src={wardrobeSliding} alt={'Szafa na wymiar'}/>
                                                    : productImage === 'wardrobe4'
                                                        ? <Image className={style.header__image} src={wardrobeBedroom} alt={'Szafa na wymiar'}/>
                                                        : productImage === 'wardrobe5'
                                                            ? <Image className={style.header__image} src={wardrobeNiche} alt={'Szafa na wymiar'}/>
                                                            : productImage === 'wardrobe6'
                                                                ? <Image className={style.header__image} src={wardrobeCorner} alt={'Szafa na wymiar'}/>
                                                                : productImage === 'wardrobe7'
                                                                    ? <Image className={style.header__image} src={wardrobeBevel} alt={'Szafa na wymiar'}/>
                                                                    : productImage === 'bath'
                                                                        ? <Image className={style.header__image} src={bathRoom} alt={'Meble do lazienki na wymiar'}/>
                                                                        : productImage === 'living'
                                                                            ? <Image className={style.header__image} src={livingRoom} alt={'Meble do salonu na wymiar'}/>
                                                                            : productImage === 'custom'
                                                                                ? <Image className={style.header__image} src={customRoom} alt={'Meble na wymiar'}/>
                                                                                : <Image className={style.header__image} src={kitchen1} alt={'products photo'}/>
                        }
                    </div>
                </div>
            </header>
            <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </>

    );
};

export default Header;