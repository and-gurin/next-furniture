'use client';

import { useState } from 'react';
import styles from './FAQ.module.scss';
import {raleWay} from "@/app/fonts";

const faqData = [
    {
        question: 'Czy wykonujecie pomiar na miejscu?',
        answer: 'Tak, wykonujemy bezpłatny (wstępny) pomiar u klienta w dogodnym terminie, oraz doradztwo techniczne',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: 'Bezpłatny pomiar obowiązuje na terenie administracyjnym łodzi, Poznaniu oraz Warszawy + 50 km.',
    },
    {
        question: 'Czy projekt kuchni jest darmowy?',
        answer: 'Tak, wstępny projekt 3D przygotowujemy bezpłatnie na podstawie pomiarów i preferencji klienta.',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',

    },
    {
        question: 'Jak długo trwa realizacja?',
        answer: 'Standardowy czas realizacji to 4-8 tygodni od akceptacji projektu i podpisania umowy.',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
    {
        question: 'Co zawiera Cena mebli?',
        answer: '',
        detail1: '– kompleksowe wykonanie mebli, wraz z akcesoriami (uchwyty, cokoły z listwami, blaty, oświetlenie wraz z montażem… itp)',
        detail2: '– transport mebli do miejsca docelowego',
        detail3: '– montaż mebli u klienta, sprzątanie, wywóz śmieci',
        detail4: '– regulację mebli po kilku tygodniach użytkowania',
    },
    {
        question: 'Co nie obejmuje cena mebli?',
        answer: 'Cena mebli kuchennych nie obejmuje podłączeń gazowych i hydraulicznych – zlew, kuchnia gazowa oraz zmywarka są odpowiednio przygotowane do podłączenia (blaty zabezpieczone silikonem, powycinane wszystkie niezbędne otwory w meblach, doprowadzone wszystkie rury, wygodny dostęp do wszystkich zaworów i odpływów)',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
    {
        question: 'Czy termin realizacji projektu jest określony w umowie?',
        answer: 'W umowie zawarte są wszystkie szczegóły dotyczące mebli, termin realizacji zamówienia, warunki gwarancji oraz inne ważne dla stron punkty.',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
    {
        question: 'Czy wpłacenie zadatku jest  konieczne?',
        answer: 'Konieczne jest wpłacenie zadatku na poczet wykonania zamówienia w wysokości 30% ceny zamówionych mebli (gotówka lub przelew).',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
    {
        question: 'Jak długo trwa montaż mebli?',
        answer: 'Montaż mebli odbywa się przeważnie w godzinach porannych, trwa zazwyczaj kilka godzin. Przy bardziej skomplikowanych pracach, montaż mebli wydłużyć się może do 3 dni.',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
    {
        question: 'Co z gwarancją na meble?',
        answer: 'Na meble udziela 2-letniej gwarancji. Wszystkie okucia firmy Blum w naszych meblach objęte są dożywotnią gwarancją',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={raleWay.className + ' ' + styles.faqContainer}>
            <h2 className={styles.title}>Najczęściej zadawane pytania</h2>
            <ul className={styles.list}>
                {faqData.map((item, index) => (
                    <li key={index} className={styles.item}>
                        <button
                            onClick={() => toggleAnswer(index)}
                            className={styles.question}
                        >
                            <span>{item.question}</span>
                            <span className={styles.icon}>
                {openIndex === index ? '−' : '+'}
              </span>
                        </button>
                        <div className={`${styles.answer} ${openIndex === index ? styles.visible : ''}`}>
                            <p>
                                {item.answer}
                            </p>
                            <p>
                                {item.detail1}
                            </p>
                            <p>
                                {item.detail2}
                            </p>
                            <p>
                                {item.detail3}
                            </p>
                            <p>
                                {item.detail4}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;

