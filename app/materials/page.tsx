import "@/styles/wrapper.scss"
import style from "./page.module.scss"
import {baskerville} from "@/app/fonts";
import Stages from "@/components/stages/Stages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Materiały | InHouse meble'
}
export default function Materials () {

    return (
        <>
            <section className={style.contacts}>
                <div className={`wrapper ${style.contacts__wrapper}`}>
                    <div className={style.contacts__description}>
                        <h2 className={baskerville.className + ' ' + style.contacts__title}>
                            Materiały, których używamy
                        </h2>
                    </div>
                </div>
            </section>
            <Stages/>
        </>

    )
}