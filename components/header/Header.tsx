import React from "react";
import "@/styles/wrapper.scss"
import NavItem from "@/components/navigation/Navigation";
import Link from "next/link";
import style from "./Header.module.scss";
import Image from "next/image";
import logo from "@/public/logo_lalasia.svg";
import arrowDown from "@/public/arrow-down-339-svgrepo-com.svg";
import {raleWay} from '@/app/fonts';

const links = [
    {id: 1, title: 'Materiały', href: '/materials'},
    {id: 2, title: 'Kontakt', href: '/contacts'},
]

const Header = () => {
    return (
        <header className={raleWay.className + ' ' + style.header}>
            <div className={`wrapper  ${style.header__wrapper}`}>
                <Link href='/' className={style.logo}>
                    <Image
                        src={logo}
                        width='42'
                        height='42'
                        alt='logo'
                    />
                    IN HOUSE
                </Link>
                <nav className={style.header__navigation}>
                    <div className={style.header__products} >
                        Produkty
                        <Image
                            src= {arrowDown}
                            width='16'
                            height='16'
                            alt='arrow down'
                        />
                    </div>
                    <ul className={style.header__links}>
                        <NavItem links={links}/>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;