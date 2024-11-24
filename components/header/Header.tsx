"use client";

import "@/styles/wrapper.scss"
import NavItem from "@/components/navigation/Navigation";
import style from "./Header.module.scss";
import Image from "next/image";
import arrowDown from "@/public/arrow-down-339-svgrepo-com.svg";
import {raleWay} from '@/app/fonts';
import Logo from "@/components/logo/Logo";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import kitchen1 from "@/public/Kitchen/Modern/Modern-8.jpg";
import kitchen2 from "@/public/Kitchen/Classic/Classic-3.jpg";
import kitchen3 from "@/public/Kitchen/Nobilia/nobilia-5.jpg";
import wardrobe1 from "@/public/Wardrobe/Collage/Wardrobe-8.jpg";
import wardrobeSliding from "@/public/Wardrobe/Collage/Sliding-wardrobe-3.jpg";
import wardrobeSwing from "@/public/Wardrobe/Hallway-2-1.jpg";
import wardrobeBedroom from "@/public/Wardrobe/bedroom-3.jpg";
import wardrobeNiche from "@/public/Wardrobe/niche-5.jpg";
import wardrobeCorner from "@/public/Wardrobe/corner-1-2.jpg";
import wardrobeBevel from "@/public/Wardrobe/bevel-1.jpg";
import bathRoom from "@/public/Custom/Collage/bath-4.jpg";
import livingRoom from "@/public/Custom/Collage/living-room-1.jpg";
import customRoom from "@/public/Custom/Collage/bed-room-3.jpg";
import burger from "@/public/icons8-menu.svg";
import close from "@/public/close-bold-svgrepo-com.svg";
import arrowRight from "@/public/right-arrow-svgrepo-com.svg";
import arrowLeft from "@/public/left-arrow-svgrepo-com.svg";
import handset from "@/public/handset-svgrepo-com.svg";
import ukraine from "@/public/flag-for-ukraine-svgrepo-com.svg"

const links = [
    {id: 1, title: 'Materiały', href: '/materials'},
    {id: 2, title: 'Kontakt', href: '/contacts'},
    {id: 3, title: 'Współpraca', href: '/cooperation'},
]

const Header = () => {

    const [open, setOpen] = useState(false);
    const [productImage, setProductImage] = useState('');
    const [openBurger, setOpenBurger] = useState(false);
    const [openBottomMenu, setOpenBottomMenu] = useState(false);
    const onClickBottomMenuLinks = () => {
        setOpenBottomMenu(!openBottomMenu);
        setOpenBurger(!openBurger)
    }

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
        <header className={raleWay.className + ' ' + style.header} ref={headerRef}>
            <div className={`wrapper  ${style.header__wrapper}`} >
                <Logo/>
                {/*<a href="tel:+48511944302" className={style.header__phone}>*/}
                {/*    <Image*/}
                {/*        src={handset}*/}
                {/*        width='24'*/}
                {/*        height='24'*/}
                {/*        alt='Słuchawka'*/}
                {/*    />*/}
                {/*    8:00-19:00*/}
                {/*</a>*/}
                <Image
                    className={style.header__flag}
                    src={ukraine}
                    width='32'
                    height='32'
                    alt='Flaga Ukrainy'
                />
                <nav className={style.header__navigation}>
                    <div className={style.header__products}
                         onClick={() => setOpen(!open)}>
                        Produkty
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
                        <li>
                            <Link href={'/contacts'}>
                                <b>
                                    {'Bezpłatna wycena'}
                                </b>
                            </Link>
                        </li>
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
                        Produkty
                        <Image
                            src={arrowRight}
                            width='16'
                            height='16'
                            alt='Strzałka w prawo'
                        />
                    </div>
                    <ul className={style.header__links_burger}>
                        <NavItem links={links} openMenu={() => setOpenBurger(!openBurger)}/>
                        <Link href={'/contacts'}>
                            <b>
                                {'Bezpłatna wycena'}
                            </b>
                        </Link>
                    </ul>
                    <a href="tel:+48511944302" className={style.header__phone}>
                        <Image
                            src={handset}
                            width='24'
                            height='24'
                            alt='Słuchawka'
                        />
                        Pon-Sob: 8-00 : 20-00
                    </a>
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
                    Powrót do menu
                </div>
                <p className={style.header__horizontalLLine}></p>
                <div className={style.header__categories}>
                    <Link
                        href={'/products/modern-kitchen'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Kuchnie w nowoczesnym stylu
                    </Link>
                    <Link
                        href={'/products/classic-kitchen'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Kuchnie w stylu klasycznym
                    </Link>
                    <Link
                        href={'/products/german-kitchen'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Niemieckie kuchnie Nobilia
                    </Link>
                </div>
                <div className={style.header__categories}>
                    <Link
                        href={'/products/wardrobe'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Garderoby
                    </Link>
                    <Link
                        href={'/products/hallway'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Szafy do przedpokoju
                    </Link>
                    <Link
                        href={'/products/sliding'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Szafy z drzwiami przesuwnymi
                    </Link>
                    <Link
                        href={'/products/bedroom'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Szafy do sypialni
                    </Link>
                    <Link
                        href={'/products/niche'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Szafy wnekowe
                    </Link>
                    <Link
                        href={'/products/corner'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Szafy narożne
                    </Link>
                    <Link
                        href={'/products/bevel'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Szafy pod skos
                    </Link>
                </div>
                <div className={style.header__categories}>
                    <Link
                        href={'/products/bath-room'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Łazienka
                    </Link>
                    <Link
                        href={'/products/living-room'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Salon
                    </Link>
                    <Link
                        href={'/products/custom-furniture'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Na wymiar
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
                        Kuchnie w nowoczesnym stylu
                    </Link>
                    <Link
                        href={'/products/classic-kitchen'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('kitchen2')}
                    >
                        Kuchnie w stylu klasycznym
                    </Link>
                    <Link
                        href={'/products/german-kitchen'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('kitchen3')}
                    >
                        Niemieckie kuchnie Nobilia
                    </Link>
                </div>
                <div className={style.header__categories}>
                    <Link
                        href={'/products/wardrobe'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('wardrobe1')}
                    >
                        Garderoby
                    </Link>
                    <Link
                        href={'/products/hallway'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('wardrobe2')}
                    >
                        Szafa do przedpokoju
                    </Link>
                    <Link
                        href={'/products/sliding'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('wardrobe3')}
                    >
                        Szafy z drzwiami przesuwnymi
                    </Link>
                    <Link
                        href={'/products/bedroom'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('wardrobe4')}
                    >
                        Szafy do sypialni
                    </Link>
                    <Link
                        href={'/products/niche'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('wardrobe5')}
                    >
                        Szafy wnekowe
                    </Link>
                    <Link
                        href={'/products/corner'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('wardrobe6')}
                    >
                        Szafy narożne
                    </Link>
                    <Link
                        href={'/products/bevel'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('wardrobe7')}
                    >
                        Szafy pod skos
                    </Link>
                </div>
                <div className={style.header__categories}>
                    <Link
                        href={'/products/bath-room'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('bath')}
                    >
                        Łazienka
                    </Link>
                    <Link
                        href={'/products/living-room'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('living')}
                    >
                        Salon
                    </Link>
                    <Link
                        href={'/products/custom-furniture'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('custom')}
                    >
                        Na wymiar
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
    );
};

export default Header;