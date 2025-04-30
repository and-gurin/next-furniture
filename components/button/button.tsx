import React from 'react';
import Link from "next/link";
import style from "./button.module.scss"
import {raleWay} from "@/app/fonts";
import {useTranslation} from "react-i18next";

const Button = ({text, description, onClick, title}: {
    text?: string,
    description?: string,
    onClick?: () => void,
    title: string,
}) => {

    const {t} = useTranslation('gallery');

    return (
        <>
            {text !== 'contact' ?
                <Link href={'/contacts'} className={raleWay.className + ' ' + style.button}>
                    {t('button-title1')}
                </Link>
                : <button className={raleWay.className + ' ' + style.button} onClick={onClick}>
                    {title}
                </button>}
            {description && <div className={style.button__description}>
                {description}
            </div>}
        </>

    );
};

export default Button;