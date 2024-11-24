import React from 'react';
import Link from "next/link";
import style from "./button.module.scss"
import {raleWay} from "@/app/fonts";

const Button = ({text}: {
    text?: string,
}) => {
    return (
        <Link href={'/contacts'} className={raleWay.className + ' ' + style.button}>
            {text === 'contact' ? 'Skontaktuj się z nami →' : 'Bezpłatna wycena →'}
        </Link>
    );
};

export default Button;