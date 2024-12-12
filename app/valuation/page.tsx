import "@/styles/wrapper.scss"
import style from "./page.module.scss"
import {baskerville} from "@/app/fonts";
import Stages from "@/components/stages/Stages";
import {Metadata} from "next";
import FormValuation from "@/components/form-valuation/FormValuation";

export const metadata: Metadata = {
    title: 'Wycena | InHouse meble'
}
export default function Valuation () {

    return (
        <>
            <section className={style.contacts}>
                <div className={`wrapper ${style.contacts__wrapper}`}>
                    <div className={style.contacts__description}>
                        <h2 className={baskerville.className + ' ' + style.contacts__title}>
                            Wycena mebli gratis
                        </h2>
                        <p className={style.contacts__subtitle}>

                        </p>
                        <p className={style.contacts__subtitle}>
                            Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o cenie i sposobie realizacji
                            kreacji Twojej wyjątkowej przestrzeni
                        </p>
                        {/*<address className={style.contacts__links}>*/}
                        {/*    <div className={style.contacts__link}>*/}
                        {/*        <p className={style.contacts__link_left}>Telefon:</p>*/}
                        {/*        <a className={style.contacts__link_right} href="tel:+48511944302">511944302</a>*/}
                        {/*    </div>*/}
                        {/*    <br/>*/}
                        {/*    <div className={style.contacts__link}>*/}
                        {/*        <p className={style.contacts__link_left}>E-mail:</p>*/}
                        {/*        <a className={style.contacts__link_right} href="mailto:inhouse.biuro@gmail.com">*/}
                        {/*            inhouse.biuro@gmail.com*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*    <br/>*/}
                        {/*    <div className={style.contacts__link}>*/}
                        {/*        <p className={style.contacts__link_left}>Adres:</p>*/}
                        {/*        <a className={style.contacts__link_right}*/}
                        {/*           href="https://maps.app.goo.gl/9vVgANhEb4Hhn8Pr5"*/}
                        {/*        >*/}
                        {/*            Błażeja 76B, 61-608 Poznań*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*</address>*/}
                    </div>
                    <FormValuation/>
                </div>
            </section>
            <Stages/>
        </>
    )
}