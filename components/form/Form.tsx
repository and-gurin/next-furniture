"use client";

import "@/styles/wrapper.scss"
import style from "./Form.module.scss"
import {baskerville} from "@/app/fonts";
import {useRef} from "react";
import emailjs from '@emailjs/browser';

export default function Form() {

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

    )
}