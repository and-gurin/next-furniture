'use client';

import React from 'react';
import "@/styles/wrapper.scss"
import style from "./Contacts.module.scss"
import {baskerville} from "@/app/fonts";
import {useTranslation} from "react-i18next";
import FormTranslate from "@/components/form-valuation/Form-translate";

export default function Contacts () {

    const { t } = useTranslation('common');

    return (
        <>
            <section className={style.contacts}>
                <div className={`wrapper ${style.contacts__wrapper}`}>
                    <div className={style.contacts__description}>
                        <h2 className={baskerville.className + ' ' + style.contacts__title}>
                            {t('contact-title')}
                        </h2>
                        <p className={style.contacts__subtitle}>
                            {t('contact-subtitle')}
                        </p>
                        <address className={style.contacts__links}>
                            <div className={style.contacts__link}>
                                <p className={style.contacts__link_left}>{t('contact-phone')}</p>
                                <a className={style.contacts__link_right} href="tel:+48511944302">
                                    {t('phone')}
                                </a>
                            </div>
                            <br/>
                            <div className={style.contacts__link}>
                                <p className={style.contacts__link_left}>{t('contact-e-mail')}</p>
                                <a className={style.contacts__link_right} href="mailto:inhouse.biuro@gmail.com">
                                    {t('e-mail')}
                                </a>
                            </div>
                            <br/>
                            <div className={style.contacts__link}>
                                <p className={style.contacts__link_left}>{t('contact-address')}</p>
                                <a className={style.contacts__link_right} href="https://maps.app.goo.gl/9vVgANhEb4Hhn8Pr5">
                                    {t('address')}
                                </a>
                            </div>
                        </address>
                    </div>
                    <FormTranslate/>
                </div>
            </section>
        </>
    )
}