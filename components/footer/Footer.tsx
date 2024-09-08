import "@/styles/wrapper.scss"
import style from "./Footer.module.scss"
import Logo from "@/components/logo/Logo";
import {raleWay} from "@/app/fonts";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className={raleWay.className + ' ' + style.footer}>
            <div className={`wrapper ${style.footer__wrapper}`}>
                <nav className={style.footer__contacts}>
                    <div className={style.footer__address}>
                        <Logo/>
                        <a href="https://maps.app.goo.gl/9vVgANhEb4Hhn8Pr5">
                            Błażeja 76B,
                            <br/>
                            61-608 Poznań
                        </a>
                    </div>
                    <address className={style.footer__links}>
                        <a href="tel:+48511944302">
                            511944302
                        </a>
                        <a href="mailto:inhouse.biuro@gmail.com">
                            inhouse.biuro@gmail.com
                        </a>
                    </address>
                    <div className={style.footer__social}>
                        {/*<a target='_blank'*/}
                        {/*className={style.footer__link}*/}
                        {/*   href="https://www.facebook.com/andrei.hurynovich.18/">*/}
                        {/*    Facebook*/}
                        {/*</a>*/}
                        <a target='_blank'
                           className={style.footer__link}
                           href="https://www.instagram.com/and_gurin/">
                            Instagram
                        </a>
                    </div>
                    <div className={style.footer__social}>
                        <Link href={'/privacy'} className={style.footer__link}>
                            Polityka Prywatności
                        </Link>
                        <Link href={'/cookie'} className={style.footer__link}>
                            Pliki Cookie
                        </Link>
                    </div>
                </nav>
                <p className={style.footer__copyright}>
                    Copyright 2024 © In House All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;