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

const links = [
    {id: 1, title: 'Materiały', href: '/materials'},
    {id: 2, title: 'Kontakt', href: '/contacts'},
]

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <header className={raleWay.className + ' ' + style.header}>
            <div className={`wrapper  ${style.header__wrapper}`}>
                <Logo/>
                <nav className={style.header__navigation}>
                    <div className={style.header__products}
                         //onMouseEnter={() => setOpen(!open)}
                         //onMouseLeave={() => setOpen(!open)}
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
                <Link href={'/products/modern-kitchen'} className={style.header__additional}>Kuhnie</Link>
                <p className={style.header__additional}>Kuhnie</p>
                <p className={style.header__additional}>Kuhnie</p>
                <p className={style.header__additional}>Kuhnie</p>
                <p className={style.header__additional}>Kuhnie</p>
            </div>
        </header>
    );
};

export default Header;