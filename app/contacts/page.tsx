"use client";

import "@/styles/wrapper.scss"
import style from "./page.module.scss"
import {baskerville} from "@/app/fonts";
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import Stages from "@/components/stages/Stages";

export default function Contacts () {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e?: { preventDefault: () => void; }) => {
        e!.preventDefault();

        emailjs.sendForm('service_fkkgphw', 'template_85mf2ds', form.current!, 'Xg2lnFFshj6JDL1Rn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        if (form.current) {
            form.current.reset()
        }

    };

    return (
        <>
            <section className={style.contacts}>
                <div className={`wrapper ${style.contacts__wrapper}`}>
                    <div className={style.contacts__description}>
                        <h2 className={baskerville.className + ' ' + style.contacts__title}>
                            Kontakt
                        </h2>
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
                                <a className={style.contacts__link_right} href="mailto:inhouse.pol@gmail.com">inhouse.pol@gmail.com</a>
                            </div>
                            <br/>
                            <div className={style.contacts__link}>
                                <p className={style.contacts__link_left}>Adres:</p>
                                <a className={style.contacts__link_right} href="https://goo.gl/maps/ZgnfN5Z5FdkxQxpr9">Niemena 4, 95-070 Aleksandrów Łódzki</a>
                            </div>
                        </address>
                    </div>
                    <div className={style.form}>
                        <h3 className={baskerville.className + ' ' + style.form__title}>
                            Bezpłatna wizyta
                        </h3>
                        <p className={style.form__subtitle}>
                            Wpisz swoje imię i nazwisko oraz numer telefonu lub adres e-mail, aby umówić się na bezpłatną wizytę.
                        </p>
                        <form className={style.contacts__form} ref={form} onSubmit={sendEmail}>
                            <input placeholder='Imię'
                                   name='user_name'
                                   className={style.form__field}
                                   type="text"
                                   required // Podaj swoje imię
                            />
                            <input placeholder='E-mail'
                                   name='email'
                                   className={style.form__field}
                                   type="email"
                            />
                            <input placeholder='Telefon'
                                   name='phone'
                                   className={style.form__field}
                                   type="tel"
                            />
                            <textarea className={style.form__field + ' ' + style.form__field_area}
                                      rows={7} cols={45}
                                      placeholder='Wiadomość...'
                                      name='message'
                            />
                            <button className={style.form__button} type='submit'>
                                Wyślij nam wiadomość
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Stages/>
        </>

    )
}