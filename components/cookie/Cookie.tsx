'use client';

import "@/styles/wrapper.scss";
import style from "./Cookie.module.scss";
import { baskerville } from "@/app/fonts";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import stageOne from "@/public/stages-of-work-1.jpg";
import stageTwo from "@/public/stages-of-work-2.jpg";
import stageThree from "@/public/stages-of-work-3.jpg";
import stageFour from "@/public/stages-of-work-4.jpg";
import Stages from "@/components/stages/Stages";
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
export default function Cookie() {

    const { t } = useTranslation(['cookie']);

    return (
        <>
            <section className={style.cookies}>
                <div className={`wrapper ${style.cookies__wrapper}`}>
                    <article className={style.cookies__description}>
                        <h1 className={baskerville.className + " " + style.cookies__title}>
                            {t("cookie-policy-title")}
                        </h1>
                        <ol type="1">
                            <li>
                                <strong>{t("cookie-policy-introduction.title")}</strong>
                                <p className={style.cookies__subtitle}>
                                    {t("cookie-policy-introduction.description")}
                                </p>
                            </li>
                            <li>
                                <strong>{t("cookie-policy-what-are-cookies.title")}</strong>
                                <p className={style.cookies__subtitle}>
                                    {t("cookie-policy-what-are-cookies.description")}
                                </p>
                            </li>
                            <li>
                                <strong>{t("cookie-policy-types.title")}</strong>
                                <ul>
                                    <p className={style.cookies__subtitle}>
                                        {t("cookie-policy-types.description")}
                                    </p>
                                    <li className={style.cookies__list}>
                                        <p className={style.cookies__subtitle}>
                                            <strong>{t("cookie-policy-types.necessary.title")}:</strong>
                                            {t("cookie-policy-types.necessary.description")}
                                        </p>
                                    </li>
                                    <li className={style.cookies__list}>
                                        <p className={style.cookies__subtitle}>
                                            <strong>{t("cookie-policy-types.analytics.title")}:</strong>
                                            {t("cookie-policy-types.analytics.description")}
                                        </p>
                                    </li>
                                    <li className={style.cookies__list}>
                                        <p className={style.cookies__subtitle}>
                                            <strong>{t("cookie-policy-types.functional.title")}:</strong>
                                            {t("cookie-policy-types.functional.description")}
                                        </p>
                                    </li>
                                    <li className={style.cookies__list}>
                                        <p className={style.cookies__subtitle}>
                                            <strong>{t("cookie-policy-types.advertising.title")}:</strong>
                                            {t("cookie-policy-types.advertising.description")}
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>{t("cookie-policy-manage-cookies.title")}</strong>
                                <p className={style.cookies__subtitle}>
                                    {t("cookie-policy-manage-cookies.description1")}
                                </p>
                                <p className={style.cookies__subtitle}>
                                    <strong>{t("cookie-policy-manage-cookies.description2")}</strong>
                                </p>
                                <ul>
                                    <li className={style.cookies__list}>
                                        <Link
                                            href={
                                                "https://support.google.com/chrome/answer/95647?hl=pl&co=GENIE.Platform%3DDesktop"
                                            }
                                            className={`${style.cookies__subtitle} ${style.cookies__link}`}
                                        >
                                            {t("cookie-policy-manage-cookies.browsers.chrome")}
                                        </Link>
                                    </li>
                                    <li className={`${style.cookies__subtitle} ${style.cookies__list}`}>
                                        <Link
                                            href={
                                                "https://support.mozilla.org/pl/kb/usuwanie-ciasteczek-i-danych-stron-firefox?redirectslug=usuwanie-ciasteczek&redirectlocale=pl"
                                            }
                                            className={style.cookies__link}
                                        >
                                            {t("cookie-policy-manage-cookies.browsers.firefox")}
                                        </Link>
                                    </li>
                                    <li className={`${style.cookies__subtitle} ${style.cookies__list}`}>
                                        <Link
                                            href={
                                                "https://support.microsoft.com/pl-pl/windows/zarz%C4%85dzanie-plikami-cookie-w-przegl%C4%85darce-microsoft-edge-wy%C5%9Bwietlanie-zezwalanie-blokowanie-usuwanie-i-u%C5%BCywanie-168dab11-0753-043d-7c16-ede5947fc64d"
                                            }
                                            className={style.cookies__link}
                                        >
                                            {t("cookie-policy-manage-cookies.browsers.edge")}
                                        </Link>
                                    </li>
                                    <li className={`${style.cookies__subtitle} ${style.cookies__list}`}>
                                        <Link
                                            href={"https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"}
                                            className={style.cookies__link}
                                        >
                                            {t("cookie-policy-manage-cookies.browsers.safari")}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>{t("cookie-policy-changes.title")}</strong>
                                <p className={style.cookies__subtitle}>
                                    {t("cookie-policy-changes.description")}
                                </p>
                            </li>
                            <li>
                                <strong>{t("cookie-policy-contact.title")}</strong>
                                <p className={style.cookies__subtitle}>
                                    {t("cookie-policy-contact.description")}&nbsp;
                                    <a
                                        className={style.cookies__link}
                                        href={`mailto:${t("cookie-policy-contact.e-mail")}`}
                                    >
                                        {t("cookie-policy-contact.email")}
                                    </a>
                                </p>
                            </li>
                        </ol>
                    </article>
                </div>
            </section>
            <Stages stages={stages}/>
        </>
    );
}