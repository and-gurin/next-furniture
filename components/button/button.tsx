import React from 'react';
import Link from "next/link";
import style from "./button.module.scss"
import {raleWay} from "@/app/fonts";

const Button = () => {
    return (
        <button className={style.button}>
            <Link href={'/contacts'} className={raleWay.className}>
                Skontaktuj się z nami →
            </Link>
        </button>

    );
};

export default Button;