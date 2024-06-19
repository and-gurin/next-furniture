import "@/styles/wrapper.scss"
import style from "./page.module.scss"
import {baskerville} from "@/app/fonts";
import Stages from "@/components/stages/Stages";
import {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Cookie Policy | InHouse meble'
}
export default function CookiePolicy() {

    return (
        <>
            <section className={style.cookies}>
                <div className={`wrapper ${style.cookies__wrapper}`}>
                    <article className={style.cookies__description}>
                        <h2 className={baskerville.className + ' ' + style.cookies__title}>
                            Polityka Plików Cookie
                        </h2>
                        <ol type="1">
                            <li>
                                <strong>1. Wstęp</strong>
                                <p className={style.cookies__subtitle}>
                                    Niniejsza polityka plików cookie wyjaśnia, czym są pliki cookie,
                                    jak je wykorzystujemy, jakie masz prawa w związku z ich używaniem
                                    oraz jak możesz zarządzać swoimi preferencjami dotyczącymi plików cookie.
                                </p>
                            </li>
                            <li>
                                <strong>2. Czym są pliki cookie?</strong>
                                <p className={style.cookies__subtitle}>
                                    Pliki cookie to małe pliki tekstowe, które są przechowywane na
                                    Twoim urządzeniu (komputerze, tablecie, smartfonie) podczas odwiedzania
                                    naszej strony internetowej. Pliki cookie pomagają nam poprawić
                                    funkcjonalność strony,
                                    analizować ruch oraz dostosowywać treści do Twoich preferencji.
                                </p>
                            </li>
                            <li>
                                <strong>3. Jakie rodzaje plików cookie wykorzystujemy?</strong>
                                <ul>
                                    <p className={style.cookies__subtitle}>
                                        Wykorzystujemy następujące rodzaje plików
                                        cookie:
                                    </p>
                                    <li className={style.cookies__list}>
                                        <p className={style.cookies__subtitle}>
                                            <strong>Pliki cookie niezbędne:</strong>
                                            Są to pliki cookie, które są
                                            niezbędne do prawidłowego funkcjonowania naszej strony.
                                            Umożliwiają one korzystanie z podstawowych funkcji,
                                            takich jak nawigacja po stronie oraz dostęp do
                                            zabezpieczonych obszarów.
                                        </p>
                                    </li>
                                    <li className={style.cookies__list}>
                                        <p className={style.cookies__subtitle}>
                                            <strong>Pliki cookie analityczne:</strong>
                                            Te pliki cookie pomagają nam zrozumieć, jak użytkownicy
                                            korzystają z naszej strony, co pozwala nam poprawiać jej
                                            działanie. Informacje zbierane za pomocą tych plików są
                                            anonimowe i służą wyłącznie do celów statystycznych.
                                        </p>
                                    </li>
                                    <li className={style.cookies__list}>
                                        <p className={style.cookies__subtitle}>
                                            <strong>Pliki cookie funkcjonalne:</strong>
                                            Umożliwiają one zapamiętywanie Twoich wyborów
                                            (takich jak język lub region) oraz dostosowywanie
                                            strony do Twoich indywidualnych potrzeb.
                                        </p>
                                    </li>
                                    <li className={style.cookies__list}>
                                        <p className={style.cookies__subtitle}>
                                            <strong>Pliki cookie funkcjonalne:</strong>
                                            Te pliki cookie służą do wyświetlania reklam
                                            dostosowanych do Twoich zainteresowań.
                                            Mogą być używane przez nas lub przez naszych
                                            partnerów reklamowych.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>4. Jak zarządzać plikami cookie?</strong>
                                <p className={style.cookies__subtitle}>
                                    Możesz zarządzać swoimi preferencjami dotyczącymi plików cookie, korzystając z
                                    ustawień swojej przeglądarki internetowej. Większość przeglądarek umożliwia
                                    kontrolowanie plików cookie, w tym ich blokowanie lub usuwanie. Pamiętaj jednak, że
                                    wyłączenie niektórych plików cookie może wpłynąć na funkcjonalność naszej strony.
                                </p>
                                <p className={style.cookies__subtitle}>
                                    <strong>
                                        Instrukcje dla najpopularniejszych przeglądarek:
                                    </strong>
                                </p>
                                <ul>
                                    <li className={style.cookies__list}>
                                        <Link
                                            href={'https://support.google.com/chrome/answer/95647?hl=pl&co=GENIE.Platform%3DDesktop'}
                                            className={style.cookies__subtitle + ' ' + style.cookies__link}>
                                            Google Chrome
                                        </Link>
                                    </li>
                                    <li className={style.cookies__subtitle + ' ' + style.cookies__list}>
                                        <Link
                                            href={'https://support.mozilla.org/pl/kb/usuwanie-ciasteczek-i-danych-stron-firefox?redirectslug=usuwanie-ciasteczek&redirectlocale=pl'}
                                            className={style.cookies__link}>
                                            Mozilla Firefox
                                        </Link>
                                    </li>
                                    <li className={style.cookies__subtitle + ' ' + style.cookies__list}>
                                        <Link
                                            href={'https://support.microsoft.com/pl-pl/windows/zarz%C4%85dzanie-plikami-cookie-w-przegl%C4%85darce-microsoft-edge-wy%C5%9Bwietlanie-zezwalanie-blokowanie-usuwanie-i-u%C5%BCywanie-168dab11-0753-043d-7c16-ede5947fc64d'}
                                            className={style.cookies__link}>
                                            Microsoft Edge
                                        </Link>
                                    </li>
                                    <li className={style.cookies__subtitle + ' ' + style.cookies__list}>
                                        <Link href={'https://support.apple.com/pl-pl/guide/safari/sfri11471/mac'}
                                              className={style.cookies__link}>
                                            Safari
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>5. Zmiany w Polityce Plików Cookie</strong>
                                <p className={style.cookies__subtitle}>
                                    Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce plików cookie.
                                    Wszelkie zmiany będą publikowane na tej stronie wraz z datą ich wprowadzenia.
                                </p>
                            </li>
                            <li>
                                <strong>6. Kontakt</strong>
                                <p className={style.cookies__subtitle}>
                                    Jeśli masz jakiekolwiek pytania dotyczące naszej polityki plików cookie, skontaktuj
                                    się z nami pod adresem e-mail: &nbsp;
                                    <a className={style.cookies__link} href="mailto:inhouse.biuro@gmail.com">
                                        inhouse.biuro@gmail.com
                                    </a>
                                </p>
                            </li>
                        </ol>
                    </article>
                </div>
            </section>
            <Stages/>
        </>
    )
}