import React from 'react';
import Link from "next/link";
import style from "./button.module.scss"
import {raleWay} from "@/app/fonts";
import {useTranslation} from "react-i18next";

const Button = ({text, description, onClick, title, small}: {
    text?: string,
    description?: string,
    onClick?: () => void,
    title: string,
    small?: boolean
}) => {

    const {t} = useTranslation('gallery');

    const finalClassName = small ? raleWay.className + ' ' + style.button__button_small
        : raleWay.className + ' ' + style.button

    return (
        <>
            {text !== 'contact' ?
                <Link href={'/contacts'} className={finalClassName}>
                    {t('button-title1')}
                </Link>
                : <button className={finalClassName} onClick={onClick}>
                    {title}
                </button>}
            {description && <div className={style.button__description}>
                {description}
            </div>}
        </>

    );
};

export default Button;