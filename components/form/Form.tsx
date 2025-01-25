"use client";

import "@/styles/wrapper.scss"
import style from "./Form.module.scss"
import {baskerville} from "@/app/fonts";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import Modal from "@/components/modal/Modal";
import {useTranslation} from "react-i18next";

export default function Form() {

    const form = useRef<HTMLFormElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    //const [fileName, setFileName] = useState("");

    const { t } = useTranslation();

    const sendEmail = (e?: { preventDefault: () => void; }) => {
        e!.preventDefault();

        emailjs.sendForm('service_fkkgphw', 'template_85mf2ds', form.current!, 'Xg2lnFFshj6JDL1Rn')
            .then((result) => {
                console.log(result.text);
                setModalMessage("Twoja wiadomość została wysłana!");
                setIsModalOpen(true);
            }, (error) => {
                console.log(error.text);
                setModalMessage("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.");
                setIsModalOpen(true);
            });
        if (form.current) {
            form.current.reset()
        }

    };

    // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files[0]) {
    //         setFileName(e.target.files[0].name);
    //     } else {
    //         setFileName("");
    //     }
    // };

    return (
        <div className={style.form}>
            <h3 className={baskerville.className + ' ' + style.form__title}>
                {t('form-title')}
            </h3>
            <p className={style.form__subtitle}>
                {t('form-subtitle')}
            </p>
            <form className={style.contacts__form} ref={form} onSubmit={sendEmail}>
                <input placeholder={t('form-user-name')}
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
                <input placeholder={t('form-user-phone')}
                       name='phone'
                       className={style.form__field}
                       type="tel"
                />
                {/*<div className={style.upload}>*/}
                {/*    <label className={style.upload__button} htmlFor="file-upload">*/}
                {/*        Dodaj plik nie więcej niż 50 Kb*/}
                {/*    </label>*/}
                {/*    <span className={style.upload__filename}>{fileName || "Nie wybrano pliku"}</span>*/}
                {/*    <input*/}
                {/*        id="file-upload"*/}
                {/*        name="file"*/}
                {/*        className={style.upload__field}*/}
                {/*        type="file"*/}
                {/*        onChange={handleFileChange}*/}
                {/*    />*/}
                {/*</div>*/}
                <textarea className={style.form__field + ' ' + style.form__field_area}
                          rows={7} cols={45}
                          placeholder={t('form-textarea')}
                          name='message'
                />
                <button className={style.form__button} type='submit'>
                    {t('form-button')}
                </button>
            </form>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} message={modalMessage} />
        </div>

    )
}