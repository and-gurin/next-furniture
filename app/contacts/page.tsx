import "@/styles/wrapper.scss"
import style from "./page.module.scss"
import {baskerville} from "@/app/fonts";
import Stages from "@/components/stages/Stages";
import Form from "@/components/form/Form";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Kontakt | InHouse meble'
}
export default function Contacts () {

    return (
        <>
            <section className={style.contacts}>
                <div className={`wrapper ${style.contacts__wrapper}`}>
                    <div className={style.contacts__description}>
                        <h1 className={baskerville.className + ' ' + style.contacts__title}>
                            Kontakt
                        </h1>
                        <p className={style.contacts__subtitle}>
                            Nasze produkty są unikalne i dostosowane do specyfiki
                            każdego klienta, a nasi klienci mogą
                            liczyć na nasze wsparcie i doradztwo na każdym etapie procesu.
                        </p>
                        <p className={style.contacts__subtitle}>
                            Skontaktuj się z nami już dziś, aby dowiedzieć się więcej
                            o cenie i sposobie realizacji kreacji Twojej wyjątkowej
                            przestrzeni.
                        </p>
                        <address className={style.contacts__links}>
                            <div className={style.contacts__link}>
                                <p className={style.contacts__link_left}>Telefon:</p>
                                <a className={style.contacts__link_right} href="tel:+48511944302">511944302</a>
                            </div>
                            <br/>
                            <div className={style.contacts__link}>
                                <p className={style.contacts__link_left}>E-mail:</p>
                                <a className={style.contacts__link_right} href="mailto:inhouse.biuro@gmail.com">
                                    inhouse.biuro@gmail.com
                                </a>
                            </div>
                            <br/>
                            <div className={style.contacts__link}>
                                <p className={style.contacts__link_left}>Adres:</p>
                                <a className={style.contacts__link_right} href="https://maps.app.goo.gl/9vVgANhEb4Hhn8Pr5">Błażeja 76B, 61-608 Poznań</a>
                            </div>
                        </address>
                    </div>
                    <Form/>
                </div>
            </section>
            <Stages/>
        </>
    )
}