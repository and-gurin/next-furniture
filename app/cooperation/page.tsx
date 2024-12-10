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
                        <h1 className={baskerville.className + ' ' + style.cooperation__title}>
                            Współpraca
                        </h1>
                        <p className={style.cooperation__subtitle}>
                            Firma InHouse zaprasza do współpracy projektantów wnętrz.
                            Mamy ponad 20 lat doświadczenia w produkcji mebli: meble kuchenne,
                            meble pokojowe, meble biurowe, meble łazienkowe.
                        </p>
                        <p className={style.cooperation__subtitle}>
                            Chętnie nawiążemy również współpracę ze sklepami meblowymi,
                            stolarzami, pracowniami kuchennymi, agencjami reklamowymi.
                        </p>
                        <p className={style.cooperation__subtitle}>
                            Więcej informacje pod nr tel. &nbsp;
                            <a className={style.cooperation__link_right} href="tel:+48511944302">511944302</a>
                        </p>
                    </article>
                </div>
            </section>
            <Stages/>
        </>
    )
}