'use client';

import { useState } from 'react';
import styles from './FAQ.module.scss';
import {raleWay} from "@/app/fonts";
import {useTranslation} from "react-i18next";

const faqData = [
    {
        question: 'faq-question1',
        answer: 'faq-answer1',
        detail1: 'faq-detail11',
        detail2: '',
        detail3: '',
        detail4: '',
    },
    {
        question: 'faq-question2',
        answer: 'faq-answer2',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',

    },
    {
        question: 'faq-question3',
        answer: 'faq-answer3',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
    {
        question: 'faq-question4',
        answer: '',
        detail1: 'faq-detail41',
        detail2: 'faq-detail42',
        detail3: 'faq-detail43',
        detail4: 'faq-detail44',
    },
    {
        question: 'faq-question5',
        answer: 'faq-answer5',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
    {
        question: 'faq-question6',
        answer: 'faq-answer6',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
    {
        question: 'faq-question7',
        answer: 'faq-answer7',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
    {
        question: 'faq-question8',
        answer: 'faq-answer8',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
    {
        question: 'faq-answer9',
        answer: 'faq-question9',
        detail1: '',
        detail2: '',
        detail3: '',
        detail4: '',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const { t } = useTranslation('gallery');

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
                            <span>{t(item.question)}</span>
                            <span className={styles.icon}>
                {openIndex === index ? '−' : '+'}
              </span>
                        </button>
                        <div className={`${styles.answer} ${openIndex === index ? styles.visible : ''}`}>
                            <p>
                                {t(item.answer)}
                            </p>
                            <p>
                                {t(item.detail1)}
                            </p>
                            <p>
                                {t(item.detail2)}
                            </p>
                            <p>
                                {t(item.detail3)}
                            </p>
                            <p>
                                {t(item.detail4)}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;

