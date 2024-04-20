import React from 'react';
import Link from "next/link";
import style from "./button.module.scss"

const Button = () => {
    return (
        <Link href={'/contacts'} className={style.button}>
            Skontaktuj się z nami →
        </Link>
    );
};

export default Button;