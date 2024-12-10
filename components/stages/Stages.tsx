"use client";

import style from "./Stages.module.scss"
import Image from "next/image";
import stageOne from "@/public/stages-of-work-1.jpg";
import stageTwo from "@/public/stages-of-work-2.jpg";
import stageThree from "@/public/stages-of-work-3.jpg";
import stageFour from "@/public/stages-of-work-4.jpg";
import "@/styles/wrapper.scss"
import {baskerville} from "@/app/fonts";
import {Fade} from "react-awesome-reveal";
import Link from "next/link";

const stages = [
    {
        id: '01',
        src: stageOne,
        title: <Link className={style.stages__link} href={'/contacts'}>
                Pierwszy kontakt, wycena
        </Link>,
        description: 'Dzwonisz do nas lub wysyłasz wiadomość, ' +
            'a my próbujemy sprawdzić, czy możemy pomóc ci rozwiązać twój problem.' +
        ' Na tym etapie wykonamy projekt z wizualizacją i wyceną',
        list: ''
    },
    {
        id: '02',
        src: stageTwo,
        title: 'Projekt',
        description: 'To najważniejszy etap. Wyraźnie rozumiemy, ' +
            'że meble na zamówienie muszą być w pełnej harmonii z pomieszczeniem. ' +
            ' Przyjedziemy do ' +
            'Ciebie z próbkami materiałów, laptopem, na którym ' +
            'we współpracy z Tobą stworzymy finalną wersję projektu 3d w czasie rzeczywistym. ' +
            'Na tym etapie wykonamy:',
        list: '1',
    },
    {
        id: '03',
        src: stageThree,
        title: 'Produkcja',
        description: 'Zawarcie umowy i produkcja mebli. Podpiszemy z Tobą umowę i wykonamy meble. ' +
            'Doskonale zdajemy sobie sprawę, ' +
            'że po podpisaniu umowy i zatwierdzeniu projektu możesz mieć ' +
            'genialne pomysły, jak ulepszyć meble. Możesz dokonać zmiany w projekcie do momentu zakupu materiałów.',
        list: ''
    },
    {
        id: '04',
        src: stageFour,
        title: 'Montaż',
        description: 'Montaż mebli. Zainstalujemy meble, ' +
            'dostosujemy mechanizmy i upewnimy się, że masz to, czego chciałeś.',
        list: ''
    },
]
const Stages = ({background}: {background?: string}) => {
    return (
        <section className={background === 'whiteSmoke' ? style.stages + ' ' + style.stages_backgroundSmoke : style.stages}>
            <div className={`wrapper ${style.stages__wrapper}`}>
                <Fade direction={"up"}>
                    <h1 className={baskerville.className + ' ' + style.stages__title}>
                        Wykonywanie mebli – krok po kroku
                    </h1>
                </Fade>
                <ul>
                    {stages.map(stage =>
                        <li key={stage.id}>
                            <Fade direction={"up"} triggerOnce={true} fraction={0}>
                                <div  className={style.stages__content}>
                                    <figure className={style.stages__figure}>
                                        <Image src={stage.src}
                                               fill
                                               sizes="(min-width: 200px) 50vw, 100vw"
                                               alt='Etap pracy z klientem'
                                        />
                                    </figure>
                                    <div className={style.stages__description}>
                                        <div className={style.stages__number}>
                                            <p className={baskerville.className + ' ' + style.stages__subtitle}>{stage.id}</p>
                                            <p className={style.stages__verticalLine}></p>
                                        </div>
                                        <div>
                                            <p className={baskerville.className + ' ' + style.stages__subtitle}>
                                                {stage.title}
                                            </p>
                                            <p className={style.stages__description}>
                                                {stage.description}
                                            </p>
                                            <br/>
                                            {stage.list &&
                                                <ul className={style.stages_list}>
                                                    <li>- pomiar</li>
                                                    <li>- tworzenie projektu</li>
                                                    <li>- wybór materiałów</li>
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </li>
                    )}
                </ul>

            </div>
        </section>
    );
};

export default Stages;