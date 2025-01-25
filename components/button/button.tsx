import React from 'react';
import Link from "next/link";
import style from "./button.module.scss"
import {raleWay} from "@/app/fonts";
import {useTranslation} from "react-i18next";

const Button = ({text}: {
    text?: string,
}) => {

    const { t } = useTranslation();

    return (
        <Link href={'/contacts'} className={raleWay.className + ' ' + style.button}>
            {text === 'contact' ? t('button-title1') : t('button-title1')}
        </Link>
    );
};

export default Button;