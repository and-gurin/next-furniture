"use client";

import "@/styles/wrapper.scss"
import style from "./Valuation.module.scss"
import {baskerville} from "@/app/fonts";
import FormValuation from "@/components/form-valuation/FormValuation";
import {useTranslation} from "react-i18next";

export default function Valuation () {

    const { t } = useTranslation('common');

    return (
        <>
            <section className={style.contacts}>
                <div className={`wrapper ${style.contacts__wrapper}`}>
                    <div className={style.contacts__description}>
                        <h1 className={baskerville.className + ' ' + style.contacts__title}>
                            {t('valuation-title')}
                        </h1>
                        <p className={style.contacts__subtitle}>
                            {t('valuation-description')}
                        </p>
                    </div>
                    <FormValuation/>
                </div>
            </section>
        </>
    )
}