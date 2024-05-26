"use client";

import "@/styles/wrapper.scss"
import NavItem from "@/components/navigation/Navigation";
import style from "./Header.module.scss";
import Image from "next/image";
import arrowDown from "@/public/arrow-down-339-svgrepo-com.svg";
import {raleWay} from '@/app/fonts';
import Logo from "@/components/logo/Logo";
import {useState} from "react";
import Link from "next/link";
import kitchen1 from "@/public/Kitchen/Modern/Modern-8.jpg";
import kitchen2 from "@/public/Kitchen/Classic/Classic-3.jpg";
import kitchen3 from "@/public/Kitchen/HIGH-TECH/high-tech-1.jpg";
import wardrobe1 from "@/public/Wardrobe/Collage/Wardrobe-8.jpg";
import wardrobeSliding from "@/public/Wardrobe/Collage/Sliding-wardrobe-3.jpg";
import wardrobeSwing from "@/public/Wardrobe/Collage/Swing-wardrobe-11.jpg";
import bathRoom from "@/public/Custom/Collage/bath-4.jpg";
import livingRoom from "@/public/Custom/Collage/living-room-1.jpg";
import customRoom from "@/public/Custom/Collage/bed-room-3.jpg";
import burger from "@/public/icons8-menu.svg";
import close from "@/public/close-bold-svgrepo-com.svg";
import arrowRight from "@/public/right-arrow-svgrepo-com.svg"
import arrowLeft from "@/public/left-arrow-svgrepo-com.svg"
import handset from "@/public/handset-svgrepo-com.svg"

const links = [
    {id: 1, title: 'Materiały', href: '/materials'},
    {id: 2, title: 'Kontakt', href: '/contacts'},
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

    return (
        <header className={raleWay.className + ' ' + style.header}>
            <div className={`wrapper  ${style.header__wrapper}`} >
                <Logo/>
                <nav className={style.header__navigation}>
                    <div className={style.header__products}
                         //onMouseEnter={() => setOpen(!open)}
                         //onMouseLeave={() => setOpen(open === false)}
                         onClick={() => setOpen(!open)}>
                        Produkty
                        <Image
                            className={open ? style.header__arrow : style.header__arrow_up}
                            src={arrowDown}
                            width='16'
                            height='16'
                            alt='arrow-down'
                        />
                    </div>
                    <ul className={style.header__links}>
                        <NavItem links={links}/>
                    </ul>
                </nav>
                <div className={style.header__burger} onClick={() => setOpenBurger(!openBurger)}>
                    <Image
                        src={openBurger ? close : burger}
                        alt='burger-menu'
                        width='32'
                        height='32'
                    />
                </div>
            </div>
            {openBurger && !openBottomMenu &&
                <nav className={style.header__navigation_burger}>
                    <div className={style.header__products}
                         onClick={() => setOpenBottomMenu(!openBottomMenu)}>
                        Produkty
                        <Image
                            src={arrowRight}
                            width='16'
                            height='16'
                            alt='arrow-down'
                        />
                    </div>
                    <ul className={style.header__links_burger}>
                        <NavItem links={links} openMenu={() => setOpenBurger(!openBurger)}/>
                    </ul>
                    <a href="tel:+48511944302" className={style.header__phone}>
                        <Image
                            src={handset}
                            width='24'
                            height='24'
                            alt='handset'
                        />
                        Zadzwoń do nas teraz
                    </a>
                </nav>
            }
            <div className={!openBottomMenu ? style.header__bottomMenu
                : style.header__bottomMenu + ' ' +style.header__bottomMenu_burger}>
                <div className={style.header__arrowLeft}  onClick={() => setOpenBottomMenu(!openBottomMenu)}>
                    <Image src={arrowLeft}
                           alt='arrow-left'
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
                        href={'/products/high-tech-kitchen'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Kuchnie w stylu High Tech
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
                        href={'/products/swing'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Szafy z drzwiami skrzydłowymi
                    </Link>
                    <Link
                        href={'/products/sliding'}
                        className={style.header__category}
                        onClick={onClickBottomMenuLinks}
                    >
                        Szafy z drzwiami przesuwnymi
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
                        href={'/products/high-tech-kitchen'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('kitchen3')}
                    >
                        Kuchnie w stylu High Tech
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
                        href={'/products/swing'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('wardrobe2')}
                    >
                        Szafy z drzwiami skrzydłowymi
                    </Link>
                    <Link
                        href={'/products/sliding'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setProductImage('wardrobe3')}
                    >
                        Szafy z drzwiami przesuwnymi
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
                        ? <Image className={style.header__image} src={kitchen1} alt={'products photo'}/>
                        : productImage === 'kitchen2'
                                ? <Image className={style.header__image} src={kitchen2} alt={'products photo'}/>
                                : productImage === 'kitchen3'
                                    ? <Image className={style.header__image} src={kitchen3} alt={'products photo'}/>
                                    : productImage === 'wardrobe1'
                                        ? <Image className={style.header__image} src={wardrobe1} alt={'products photo'}/>
                                        : productImage === 'wardrobe2'
                                            ? <Image className={style.header__image} src={wardrobeSwing} alt={'products photo'}/>
                                            : productImage === 'wardrobe3'
                                                ? <Image className={style.header__image} src={wardrobeSliding} alt={'products photo'}/>
                                                : productImage === 'bath'
                                                    ? <Image className={style.header__image} src={bathRoom} alt={'products photo'}/>
                                                    : productImage === 'living'
                                                        ? <Image className={style.header__image} src={livingRoom} alt={'products photo'}/>
                                                        : productImage === 'custom'
                                                            ? <Image className={style.header__image} src={customRoom} alt={'products photo'}/>
                                : <Image className={style.header__image} src={kitchen1} alt={'products photo'}/>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;