'use client';

import "@/styles/wrapper.scss"
import style from "./Privacy-policy.module.scss"
import {baskerville} from "@/app/fonts";
import { useTranslation } from 'react-i18next';

export default function Privacy() {

    const { t } = useTranslation('common');

    return (
            <>
                <section className={style.privacy}>
                    <div className={`wrapper ${style.privacy__wrapper}`}>
                        <article className={style.privacy__description}>
                            <h2 className={baskerville.className + ' ' + style.privacy__title}>
                                {t('privacy-title')}
                            </h2>
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
            </>
    )
}