import style from "./Logo.module.scss";
import Image from "next/image";
import logo from "@/public/logo_lalasia.svg";
import Link from "next/link";
import {raleWay} from "@/app/fonts";

const Logo = () => {
    return (
        <Link href='/' className={raleWay.className + ' ' + style.logo}>
            <Image
                src={logo}
                width='42'
                height='42'
                alt='logo'
            />
            In House
        </Link>
    );
};

export default Logo;