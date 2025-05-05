"use client";

import style from "./Reviews.module.scss"
import "@/styles/wrapper.scss"
import {baskerville} from "@/app/fonts";
import {Fade} from "react-awesome-reveal";
import {useTranslation} from "react-i18next";

const reviews = [
    {
        id: '01',
        title: 'review-title1',
        description: 'Paweł, Warszawa',
        list: '18/05/2024',
    },
    {
        id: '02',
        title: 'review-title2',
        description: 'Karolina i Michał, Warszawa',
        list: '02/04/2024'
    },
    {
        id: '03',
        title: 'review-title3',
        description: 'Tomasz, Gdańsk',
        list: '22/07/2024'
    },
    {
        id: '04',
        title: 'review-title4',
        description: 'Anna, Wrocław',
        list: '27/10/2024'
    },
    // {
    //     id: '05',
    //     title: 'review-title4',
    //     description: 'Marcin, Kraków',
    //     list: '26/11/2024'
    // },
    // {
    //     id: '06',
    //     title: 'review-title4',
    //     description: 'Sylwia i Piotr, Warszawa',
    //     list: '02/02/2025'
    // },

]
const Reviews = ({background}: {background?: string}) => {

    const { t } = useTranslation('gallery');

    return (
        <section className={style.review}>
            <div className={background === 'whiteSmoke' ? `wrapper ${style.review__wrapper} ${style.review_backgroundSmoke}` : `wrapper ${style.review__wrapper}`}>
                <Fade direction={"up"}>
                    <h2 className={baskerville.className + ' ' + style.review__title}>
                        {t('review-title0')}
                    </h2>
                </Fade>
                <ul className={style.review__content}>
                    {reviews.map(review =>
                        <li key={review.id}>
                            <Fade direction={"up"} triggerOnce={true} fraction={0}>
                                <blockquote  className={style.review__text}>
                                    <p>
                                        {t(review.title)}
                                    </p>
                                    <div className={style.review__name}>
                                        {review.description}
                                    </div>
                                    <div className={style.review__date}>
                                        {review.list}
                                    </div>
                                </blockquote>
                            </Fade>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Reviews;