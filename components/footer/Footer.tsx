import "@/styles/wrapper.scss"
import style from "./Footer.module.scss"
import Logo from "@/components/logo/Logo";
import {raleWay} from "@/app/fonts";

const Footer = () => {
    return (
        <footer className={raleWay.className + ' ' + style.footer}>
            <div className={`wrapper ${style.footer__wrapper}`}>
                <nav className={style.footer__contacts}>
                    <div className={style.footer__address}>
                        <Logo/>
                        <a href="https://goo.gl/maps/ZgnfN5Z5FdkxQxpr9">
                            Niemena 4,
                            <br/>
                            95-070 Aleksandrów Łódzki
                        </a>
                    </div>
                    <address className={style.footer__links}>
                        <a href="tel:+48511944302">
                            511944302
                        </a>
                        <a href="mailto:inhouse.pol@gmail.com">
                            inhouse.pol@gmail.com
                        </a>
                    </address>
                    <div className={style.footer__social}>
                        <a href="#">
                            Facebook
                        </a>
                        <a href="#">
                            Instagram
                        </a>
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