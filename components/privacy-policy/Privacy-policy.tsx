'use client';

import "@/styles/wrapper.scss"
import style from "./Privacy-policy.module.scss"
import {baskerville} from "@/app/fonts";
import { useTranslation } from 'react-i18next';
import stageOne from "@/public/stages-of-work-1.jpg";
import stageTwo from "@/public/stages-of-work-2.jpg";
import stageThree from "@/public/stages-of-work-3.jpg";
import stageFour from "@/public/stages-of-work-4.jpg";
import Stages from "@/components/stages/Stages";
import I18nProvider from "@/components/I18nProvider/I18nProvider";
import React from "react";

const stages = [
    {
        id: '01',
        src: stageOne,
        title: 'stage-title1',
        description: 'stage-description1',
        list: '',
    },
    {
        id: '02',
        src: stageTwo,
        title: 'stage-title2',
        description: 'stage-description2',
        list: ['stage-list1', 'stage-list2', 'stage-list3',],
    },
    {
        id: '03',
        src: stageThree,
        title: 'stage-title3',
        description: 'stage-description3',
        list: ''
    },
    {
        id: '04',
        src: stageFour,
        title: 'stage-title4',
        description: 'stage-description4',
        list: ''
    },
]

export default function Privacy() {

    const { t } = useTranslation(['common']);

    return (
            <>
                <section className={style.privacy}>
                    <div className={`wrapper ${style.privacy__wrapper}`}>
                        <article className={style.privacy__description}>
                            <h1 className={baskerville.className + ' ' + style.privacy__title}>
                                {t('privacy-title')}
                            </h1>
                            <ol type="1">
                                <li>
                                    <strong>{t('privacy-strong1')}</strong>
                                    <p className={style.privacy__subtitle}>
                                        {t('privacy-subtitle1')}
                                    </p>
                                </li>
                                <li>
                                    <strong>{t('privacy-strong2')}</strong>
                                    <p className={style.privacy__subtitle}>
                                        {t('privacy-subtitle2')} &nbsp;
                                        <a className={style.privacy__link} href="mailto:inhouse.biuro@gmail.com">
                                            {t('e-mail')}
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <strong>{t('privacy-strong3')}</strong>
                                    <ul>
                                        <p className={style.privacy__subtitle}>
                                            <strong>
                                                {t('privacy-subtitle3')}
                                            </strong>
                                        </p>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list1-1')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list1-2')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list1-3')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list1-4')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list1-5')}
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t('privacy-strong4')}</strong>
                                    <ul>
                                        <p className={style.privacy__subtitle}>
                                            <strong>
                                                {t('privacy-subtitle4')}
                                            </strong>
                                        </p>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list2-1')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list2-2')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list2-3')}
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t('privacy-strong5')}</strong>
                                    <ul>
                                        <p className={style.privacy__subtitle}>
                                            <strong>
                                                {t('privacy-subtitle5')}
                                            </strong>
                                        </p>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list3-1')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list3-2')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list3-3')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list3-4')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list3-5')}
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>
                                        {t('privacy-strong6')}
                                    </strong>
                                    <ul>
                                        <p className={style.privacy__subtitle}>
                                            <strong>
                                                {t('privacy-subtitle6')}
                                            </strong>
                                        </p>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list4-1')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list4-2')}
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>
                                        {t('privacy-strong7')}
                                    </strong>
                                    <ul>
                                        <p className={style.privacy__subtitle}>
                                            <strong>
                                                {t('privacy-subtitle7-1')}
                                            </strong>
                                        </p>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list5-1')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list5-2')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list5-3')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list5-4')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list5-5')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list5-6')}
                                            </p>
                                        </li>
                                        <li className={style.privacy__list}>
                                            <p className={style.privacy__subtitle}>
                                                {t('privacy-list5-7')}
                                            </p>
                                        </li>
                                    </ul>
                                    <p className={style.privacy__subtitle}>
                                        {t('privacy-subtitle7-2')}
                                        &nbsp;
                                        <a className={style.privacy__link} href="mailto:inhouse.biuro@gmail.com">
                                            {t('e-mail')}
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <strong>
                                        {t('privacy-strong8')}
                                    </strong>
                                    <p className={style.privacy__subtitle}>
                                        {t('privacy-subtitle8')}
                                    </p>
                                </li>
                                <li>
                                    <strong>
                                        {t('privacy-strong9')}
                                    </strong>
                                    <p className={style.privacy__subtitle}>
                                        {t('privacy-subtitle9')}
                                    </p>
                                </li>
                                <li>
                                    <strong>
                                        {t('privacy-strong10')}
                                    </strong>
                                    <p className={style.privacy__subtitle}>
                                        {t('privacy-subtitle10')}
                                    </p>
                                </li>
                                <li>
                                    <strong>
                                        {t('privacy-strong11')}
                                    </strong>
                                    <p className={style.privacy__subtitle}>
                                        {t('privacy-subtitle11-1')}
                                        &nbsp;
                                        <a className={style.privacy__link} href="mailto:inhouse.biuro@gmail.com">
                                            {t('e-mail')}
                                        </a>
                                    </p>
                                </li>
                            </ol>
                        </article>
                    </div>
                </section>
                <I18nProvider>
                    <Stages stages={stages} title={t('stage-title0')}/>
                </I18nProvider>
            </>
    )
}