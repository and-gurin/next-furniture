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
import kitchen1 from "@/public/Kitchen/Modern/Modern-8.jpg"
import kitchen2 from "@/public/Kitchen/Classic/Classic-3.jpg"
import kitchen3 from "@/public/Kitchen/HIGH-TECH/high-tech-1.jpg"

const links = [
    {id: 1, title: 'Materiały', href: '/materials'},
    {id: 2, title: 'Kontakt', href: '/contacts'},
]

const Header = () => {

    const [open, setOpen] = useState(false)
    const [productImage, setProductImage] = useState('')

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
                        href={'/products/modern-kitchen'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                    >
                        Kuchnie w nowoczesnym stylu
                    </Link>
                    <Link
                        href={'/products/classic-kitchen'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                    >
                        Kuchnie w stylu klasycznym
                    </Link>
                    <Link
                        href={'/products/high-tech-kitchen'}
                        className={style.header__category}
                        onClick={() => setOpen(!open)}
                    >
                        Kuchnie w stylu High Tech
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
                                : <Image className={style.header__image} src={kitchen1} alt={'products photo'}/>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;