import "@/styles/wrapper.scss"
import style from "./page.module.scss"
import {baskerville} from "@/app/fonts";
import Stages from "@/components/stages/Stages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Privacy Policy | InHouse meble'
}
export default function PrivacyPolicy() {

    return (
        <>
            <section className={style.privacy}>
                <div className={`wrapper ${style.privacy__wrapper}`}>
                    <article className={style.privacy__description}>
                        <h2 className={baskerville.className + ' ' + style.privacy__title}>
                            Polityka Prywatności
                        </h2>
                        <ol type="1">
                            <li>
                                <strong>1. Wstęp</strong>
                                <p className={style.privacy__subtitle}>
                                    Twoja prywatność jest dla nas bardzo ważna. Niniejsza polityka prywatności wyjaśnia,
                                    jakie dane osobowe zbieramy, jak je wykorzystujemy, z kim je dzielimy oraz jakie
                                    masz prawa w odniesieniu do swoich danych osobowych.
                                </p>
                            </li>
                            <li>
                                <strong>2. Administrator Danych Osobowych</strong>
                                <p className={style.privacy__subtitle}>
                                    Administratorem Twoich danych osobowych jest Andrei Hurynovich, z siedzibą w Niemena
                                    4, 95-070 Kolonia Brużyca. Możesz skontaktować się z nami pod
                                    adresem e-mail: &nbsp;
                                    <a className={style.privacy__link} href="mailto:inhouse.biuro@gmail.com">
                                        inhouse.biuro@gmail.com
                                    </a>
                                </p>
                            </li>
                            <li>
                                <strong>3. Jakie dane osobowe zbieramy?</strong>
                                <ul>
                                    <p className={style.privacy__subtitle}>
                                        <strong>
                                            Możemy zbierać następujące dane osobowe:
                                        </strong>
                                    </p>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Imię i nazwisko
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Adres e-mail
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Numer telefonu
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Adres IP
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Pliki cookie i inne technologie śledzące
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>4. W jaki sposób zbieramy Twoje dane osobowe?</strong>
                                <ul>
                                    <p className={style.privacy__subtitle}>
                                        <strong>
                                            Zbieramy dane osobowe bezpośrednio od Ciebie, gdy:
                                        </strong>
                                    </p>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Rejestrujesz się na naszej stronie
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Kontaktujesz się z nami za pośrednictwem formularza kontaktowego
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Korzystasz z naszych usług
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>5. Jak wykorzystujemy Twoje dane osobowe?</strong>
                                <ul>
                                    <p className={style.privacy__subtitle}>
                                        <strong>
                                            Twoje dane osobowe mogą być wykorzystywane w następujących celach:
                                        </strong>
                                    </p>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Świadczenie i zarządzanie naszymi usługami
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Komunikacja z Tobą
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Personalizacja doświadczenia użytkownika
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Analiza i poprawa naszych usług
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Marketing i reklama (za Twoją zgodą)
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>
                                    6. Udostępnianie danych osobowych
                                </strong>
                                <ul>
                                    <p className={style.privacy__subtitle}>
                                        <strong>
                                            Twoje dane osobowe mogą być udostępniane:
                                        </strong>
                                    </p>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Podmiotom przetwarzającym dane na nasze zlecenie (np. dostawcy usług IT)
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Organom ścigania i organom państwowym, jeżeli wymaga tego prawo
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>
                                    7. Twoje prawa
                                </strong>
                                <ul>
                                    <p className={style.privacy__subtitle}>
                                        <strong>
                                            Masz prawo do:
                                        </strong>
                                    </p>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Dostępu do swoich danych osobowych
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Sprostowania swoich danych osobowych
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Usunięcia swoich danych osobowych
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Ograniczenia przetwarzania swoich danych osobowych
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Przenoszenia swoich danych osobowych
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Wniesienia sprzeciwu wobec przetwarzania danych osobowych
                                        </p>
                                    </li>
                                    <li className={style.privacy__list}>
                                        <p className={style.privacy__subtitle}>
                                            Cofnięcia zgody na przetwarzanie danych osobowych
                                        </p>
                                    </li>
                                </ul>
                                <p className={style.privacy__subtitle}>
                                    Aby skorzystać ze swoich praw, skontaktuj się z nami pod adresem e-mail:
                                    &nbsp;
                                    <a className={style.privacy__link} href="mailto:inhouse.biuro@gmail.com">
                                        inhouse.biuro@gmail.com
                                    </a>
                                </p>
                            </li>
                            <li>
                                <strong>
                                    8. Bezpieczeństwo danych
                                </strong>
                                <p className={style.privacy__subtitle}>
                                    Dokładamy wszelkich starań, aby Twoje dane osobowe były chronione przed
                                    nieautoryzowanym dostępem, utratą, zniszczeniem lub nieuprawnionym ujawnieniem.
                                </p>
                            </li>
                            <li>
                                <strong>
                                    9. Pliki cookie
                                </strong>
                                <p className={style.privacy__subtitle}>
                                    Nasza strona internetowa używa plików cookie do poprawy doświadczenia użytkownika.
                                    Więcej informacji na temat plików cookie znajdziesz w naszej Polityce Cookie.
                                </p>
                            </li>
                            <li>
                                <strong>
                                    10. Zmiany w Polityce Prywatności
                                </strong>
                                <p className={style.privacy__subtitle}>
                                    Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności.
                                    Wszystkie zmiany będą publikowane na tej stronie.
                                </p>
                            </li>
                            <li>
                                <strong>
                                    11. Kontakt
                                </strong>
                                <p className={style.privacy__subtitle}>
                                    Jeżeli masz jakiekolwiek pytania dotyczące niniejszej polityki prywatności,
                                    skontaktuj się z nami pod adresem e-mail:
                                    &nbsp;
                                    <a className={style.privacy__link} href="mailto:inhouse.biuro@gmail.com">
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