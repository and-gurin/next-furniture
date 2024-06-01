import React from 'react';
import Link from "next/link";
import style from "./button.module.scss"
import {raleWay} from "@/app/fonts";

const Button = () => {
    return (
        <Link href={'/contacts'} className={raleWay.className + ' ' + style.button}>
            Skontaktuj się z nami →
        </Link>
    );
};

export default Button;