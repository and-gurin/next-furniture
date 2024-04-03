import {baskerville} from "@/app/fonts";
import style from "./Logo.module.scss";
import Image from "next/image";
import logo from "@/public/logo_lalasia.svg";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href='/' className={baskerville.className + ' ' + style.logo}>
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