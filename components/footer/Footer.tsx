'use client'

import "@/styles/wrapper.scss"
import style from "./Footer.module.scss"
import Logo from "@/components/logo/Logo";
import {raleWay} from "@/app/fonts";
import Link from "next/link";
import React from "react";
import {useTranslation} from "react-i18next";

const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className={raleWay.className + ' ' + style.footer}>
            <div className={`wrapper ${style.footer__wrapper}`}>
                <nav className={style.footer__contacts}>
                    <div className={style.footer__address}>
                        <Logo/>
                        <a href="https://maps.app.goo.gl/9vVgANhEb4Hhn8Pr5">
                            {t('address1')}
                            <br/>
                            {t('address2')}
                        </a>
                    </div>
                    <address className={style.footer__links}>
                        <a href="tel:+48511944302">
                            {t('phone')}
                        </a>
                        <a href="mailto:inhouse.biuro@gmail.com">
                            {t('e-mail')}
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
                           href="https://www.instagram.com/inhousemeble/">
                            Instagram
                        </a>
                    </div>
                    <div className={style.footer__social}>
                        <Link href={'/privacy'} className={style.footer__link}>
                            {t('footer-link1')}
                        </Link>
                        <Link href={'/cookie'} className={style.footer__link}>
                            {t('footer-link2')}
                        </Link>
                    </div>
                </nav>
                <p className={style.footer__copyright}>
                    Copyright 2025 © In House All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;