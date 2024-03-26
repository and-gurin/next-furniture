"use client";

import "@/styles/wrapper.scss"
import style from "./page.module.scss"
import {baskerville} from "@/app/fonts";
import {useRef} from "react";
import emailjs from '@emailjs/browser';

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
                            <p>Telefon:</p>
                            <a className={style.contacts__link_right} href="tel:+48511944302">511944302</a>
                        </div>
                        <br/>
                        <div className={style.contacts__link}>
                            <p>E-mail:</p>
                            <a className={style.contacts__link_right} href="mailto:inhouse@gmail.com">inhouse@gmail.com</a>
                        </div>
                        <br/>
                        <div className={style.contacts__link}>
                            <p>E-mail:</p>
                            <a className={style.contacts__link_right} href="https://goo.gl/maps/ZgnfN5Z5FdkxQxpr9">Niemena 4, 95-070 Aleksandrów Łódzki</a>
                        </div>
                    </address>
                </div>
                <div className={style.form}>
                    <h3 className={style.form__title}>
                        Wpisz swoje imię oraz numer telefonu lub adres e-mail.
                        Skontaktujemy się z Tobą tak szybko, jak to możliwe.
                    </h3>
                    <form className={style.contacts__form} ref={form} onSubmit={sendEmail}>
                        <input placeholder='Imię'
                               name='user_name'
                               className={style.contacts__field}
                               type="text"
                               required // Podaj swoje imię
                        />
                        <input placeholder='E-mail'
                               name='email'
                               className={style.contacts__field}
                               type="email"
                        />
                        <input placeholder='Telefon'
                               name='phone'
                               className={style.contacts__field}
                               type="tel"
                        />
                        <textarea className={style.contacts__field + ' ' + style.contacts__field_area}
                                  rows={7} cols={45}
                                  placeholder='Wiadomość...'
                                  name='message'
                        />
                        <button type='submit'>Contact me</button>
                    </form>
                </div>
            </div>
        </section>
    )
}