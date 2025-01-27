'use client';

import "@/styles/wrapper.scss"
import style from "./Cooperation.module.scss"
import {baskerville} from "@/app/fonts";
import {useTranslation} from "react-i18next";

export default function Cooperation() {

    const { t } = useTranslation('common');

    return (
        <>
            <section className={style.cooperation}>
                <div className={`wrapper ${style.cooperation__wrapper}`}>
                    <article className={style.cooperation__description}>
                        <h2 className={baskerville.className + ' ' + style.cooperation__title}>
                            {t('cooperation-title')}
                        </h2>
                        <p className={style.cooperation__subtitle}>
                            {t('cooperation-subtitle')}
                        </p>
                        <p className={style.cooperation__subtitle}>
                            {t('cooperation-subtitle-next')}
                        </p>
                        <p className={style.cooperation__subtitle}>
                            {t('cooperation-subtitle-tel')} &nbsp;
                            <a className={style.cooperation__link_right} href="tel:+48511944302">{t('phone')}</a>
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}