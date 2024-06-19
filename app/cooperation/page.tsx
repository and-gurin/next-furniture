import "@/styles/wrapper.scss"
import style from "./page.module.scss"
import {baskerville} from "@/app/fonts";
import Stages from "@/components/stages/Stages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Cooperation | InHouse meble'
}
export default function Cooperation() {

    return (
        <>
            <section className={style.cooperation}>
                <div className={`wrapper ${style.cooperation__wrapper}`}>
                    <article className={style.cooperation__description}>
                        <h2 className={baskerville.className + ' ' + style.cooperation__title}>
                            Współpraca
                        </h2>
                        <p className={style.cooperation__subtitle}>
                            Firma InHouse nawiąże współpracę ze sklepami mebli, stolarzami, studiami kuchennymi,
                            agencjami reklamowymi oraz projektantami w zakresie produkcji mebli na zamówienie. (meble
                            kuchenne, meble pokojowe, meble biurowe, meble łazienkowe).
                        </p>
                        <p className={style.cooperation__subtitle}>
                            Wszelkie informacje pod nr tel. &nbsp;
                            <a className={style.cooperation__link_right} href="tel:+48511944302">511944302</a>
                        </p>
                    </article>
                </div>
            </section>
            <Stages/>
        </>
    )
}