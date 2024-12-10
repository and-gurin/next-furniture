'use client'

import Image, {StaticImageData} from "next/image";
import {baskerville} from "@/app/fonts";
import style from "./Materials-collection.module.scss"
import React from "react";
import paint from "@/public/Kitchen/Modern/Modern-3.jpg"
import chipboard from "@/public/Kitchen/HIGH-TECH/high-tech-7.jpg"
import wood from "@/public/Kitchen/HIGH-TECH/high-tech-9-2.jpg"
import post from "@/public/Kitchen/Modern/Modern-12-1.jpg"
import slim from "@/public/Materials/egger-kompakt-f222-st76.jpg"
import cori from "@/public/Materials/corian.jpg"
import oak from "@/public/Materials/1550148890-h-600-dab.jpg"
import legra from "@/public/Materials/legrabox.jpg"
import hf2 from "@/public/Materials/HF-1.jpg"
import hk1 from "@/public/Materials/HK.jpg"
import inti from "@/public/Materials/intivo.jpg"
import anta from "@/public/Materials/antaro.jpg"
import meta from "@/public/Materials/metabox.jpg"
import hl2 from "@/public/Materials/HL-2.jpg"
import hs1 from "@/public/Materials/HS.jpg"
import meri from "@/public/Materials/merivobox.jpg"
import move from "@/public/Materials/movento.jpg"
import tandem from "@/public/Materials/tandem.jpg"

export type ImageProps = {
    id: number,
    src: StaticImageData,
}

export type MaterialsProps = {
    images: ImageProps[],
    title: string,
    description: string,
}

const facades = [
    {
        images: [{id: 1, src: paint}],
        title: 'MDF lakierowany',
        description: 'Lakierowane fronty mają gładką powierzchnię, która nadaje meblom elegancki i nowoczesny wygląd, ' +
            'a także ułatwia ich pielęgnację – wystarczy przetrzeć je miękką szmatką, aby zawsze wyglądały jak nowe. ' +
            'Fronty wykonane są z wysokiej jakości materiałów, ' +
            'co zapewnia im trwałość i odporność na zarysowania, wilgoć i ' +
            'promieniowanie UV. Kolor frontow może być dowolny, do wyboru.',
    },
    {
        images: [{id: 1, src: chipboard}],
        title: 'Płyta wiórowa Egger',
        description: 'Fronty z płyty wiórowej Egger charakteryzują się wytrzymałością, odpornością na ' +
            'uszkodzenia mechaniczne i trwałością. Szeroki wybór faktur i kolorów pozwala stworzyć eleganckie i ' +
            'funkcjonalne wnętrza. Płyta wiórowa Egger to idealne połączenie estetyki ' +
            'i praktyczności dla Twojego domu.',
    },
    {
        images: [{id: 1, src: wood}],
        title: 'Fornir',
        description: 'Fornirowane fronty zapewniają wysoką wytrzymałość i trwałość. ' +
            'Naturalny fornir dodaje ciepła i wyjątkowości każdemu elementowi. Nasze Fronty to ' +
            'idealne połączenie naturalnej estetyki i nowoczesnej jakości.',
    },
]

const worktop = [
    {
        images: [{id: 1, src: post}],
        title: 'Blaty laminowane',
        description: 'Blaty z laminowanej płyty wodoodpornej nadają naszym meblom ' +
            'nowoczesny i dyskretny styl. Charakteryzują się wysoką odpornością na ' +
            'zużycie, wilgocią i łatwą konserwacją. Szeroka gama ' +
            'dekorów pozwala wybrać idealne rozwiązanie do każdego wnętrza.',
    },
    {
        images: [{id: 1, src: slim}],
        title: 'Blaty kompaktowe Egger, Kronospan',
        description: 'Blaty te charakteryzują się smukłą, nowoczesną ' +
            'linią oraz idealnym zsynchronizowaniem dekoru blatu z barwą rdzenia. ' +
            'Dzięki jednolitej strukturze laminatu kompaktowego są odporne na zużycie, ' +
            'uderzenia i kontakt z wodą, ' +
            'dlatego doskonale sprawdzają się  jako blaty kuchenne i łazienkowe.',
    },
    {
        images: [{id: 1, src: cori}],
        title: 'Blaty, zlewy Corian®Solid Surface',
        description: 'Corian® to wszechstronny materiał składający się głównie z ' +
            'naturalnych minerałów z dodatkiem żywicy akrylowej. Jego właściwości ' +
            'pozwalają na dowolne kształtowanie i formowanie oraz, co najważniejsze, ' +
            'niewidoczne łączenie poszczególnych kolorów z szerokiej palety barw.',
    },
    {
        images: [{id: 1, src: oak}],
        title: 'Blaty drewniane',
        description: 'Blat kuchenny z naturalnego drewna to połączenie estetyki i ' +
            'funkcjonalności. Solidne i estetyczne blaty drewniane (w całości wykonane ' +
            'z drewna), dzięki swej kolorystyce oraz ' +
            'naturalnym materiałom, pozwalają nadać wnętrzom ciepłego, przyjaznego klimatu.',
    },
]

const lift = [
    {
        images: [{id: 2, src: hf2},],
        title: 'Aventos HF',
        description: 'Podnośnik Blum Aventos HF zapewnia płynne i ciche ' +
            'otwieranie drzwi harmonijkowych, dzięki czemu dostęp do ' +
            'zawartości szafek jest maksymalnie wygodny. Jest wysoce niezawodny, ' +
            'łatwy w montażu i można go zamocować w dowolnej pozycji. Dzięki ' +
            'eleganckiemu wzornictwu winda doskonale wpisuje się w nowoczesne wnętrza.',
    },
    {
        images: [{id: 1, src: hs1}],
        title: 'Aventos HS',
        description: 'Podnośnik Blum Aventos HS zapewnia łatwe i ciche ' +
            'otwieranie poziomych drzwi do góry, co idealnie sprawdza się ' +
            'w przypadku wysokich i szerokich fasad. Umożliwia łatwy dostęp ' +
            'do zawartości szafek poprzez zablokowanie drzwi w dowolnej pozycji.',
    },
    {
        images: [{id: 1, src: hl2}],
        title: 'Aventos HL',
        description: 'Podnośnik Blum Aventos HL zapewnia płynne i ciche ' +
            'podnoszenie frontu równolegle do korpusu, idealny do szafek ' +
            'górnych. Pozwala na wygodne wykorzystanie przestrzeni bez ' +
            'konieczności otwierania drzwi na boki, ' +
            'co jest szczególnie ważne w przypadku kompaktowych pomieszczeń.',
    },
    {
        images: [{id: 1, src: hk1},],
        title: 'Aventos HK',
        description: 'Podnośnik Blum Aventos HK umożliwia wygodne i łatwe ' +
            'podniesienie frontu do góry, co idealnie sprawdza się w przypadku ' +
            'zafek górnych. Charakteryzuje się kompaktową, oszczędzającą miejsce ' +
            'konstrukcją i ' +
            'blokuje się w dowolnej pozycji, zapewniając maksymalny komfort.',
    },
]

const box = [
    {
        images: [{id: 2, src: meri},],
        title: 'Merivobox',
        description: 'Blum Merivobox łączy w sobie wysoką stabilność i ' +
            'nośność, zapewniając bezpieczne przechowywanie nawet ciężkich ' +
            'przedmiotów. Dzięki intuicyjnemu systemowi montażu i szerokiej ' +
            'gamie wzorów ' +
            'Merivobox z łatwością wkomponuje się w każde wnętrze.',
    },
    {
        images: [{id: 1, src: inti}],
        title: 'Tandembox Intivo',
        description: 'Blum Tandembox Intivo wyróżnia się dużą niezawodnością i ' +
            'nośnością, co zapewnia długotrwałe użytkowanie i łatwość przechowywania. ' +
            'Innowacyjna konstrukcja i płynny poślizg zapewniają wygodę użytkowania. ' +
            'Szeroki wybór stylów i wzorów sprawia, że z ' +
            'łatwością wkomponujesz je w każde wnętrze.',
    },
    {
        images: [{id: 1, src: anta}],
        title: 'Tandembox Antaro',
        description: 'Blum Tandembox Antaro zamyka się płynnie i cicho dzięki ' +
            'systemowi miękkiego zamykania. Jest bardzo stabilny i trwały, ' +
            'dzięki czemu ' +
            'idealnie nadaje się do przechowywania ciężkich przedmiotów.',
    },
    {
        images: [{id: 1, src: legra},],
        title: 'Legrabox',
        description: 'Blum Legrabox to symbol elegancji i funkcjonalności w ' +
            'świecie rozwiązań meblowych. Dzięki innowacyjnej technologii TIP-ON ' +
            'BLUMOTION jest bardzo stabilny, gładki i cichy. Dzięki współczesnemu ' +
            'wzornictwu i szerokiemu wyborowi wykończeń Legrabox idealnie pasuje do ' +
            'każdego wnętrza, dodając mu wyrafinowania i funkcjonalności.',
    },
    {
        images: [{id: 1, src: meta},],
        title: 'Metabox',
        description: 'Blum Metabox to niezawodne i trwałe rozwiązanie do ' +
            'przechowywania różnorodnych przedmiotów. Jego konstrukcja zapewnia ' +
            'wysoką stabilność i nośność, odpowiednią do różnych zastosowań. ' +
            'Łatwość montażu i różnorodność opcji wykończenia sprawiają, że Metabox ' +
            'jest uniwersalnym i praktycznym wyborem do każdego wnętrza.',
    },
    {
        images: [{id: 1, src: tandem},],
        title: 'Tandem',
        description: 'Szuflada Blum Tandem to niezawodne i ergonomiczne ' +
            'rozwiązanie do organizacji przechowywania mebli. Jego innowacyjna ' +
            'konstrukcja zapewnia płynne i ciche rozkładanie, dzięki czemu ' +
            'użytkowanie jest maksymalnie komfortowe. Wysoka nośność i stabilność ' +
            'sprawiają, że szuflada Tandem ' +
            'jest idealnym wyborem do różnorodnych typów mebli i zadań.',
    },
    {
        images: [{id: 1, src: move},],
        title: 'Movento',
        description: 'Szuflada Blum Movento to innowacyjne i zaawansowane ' +
            'technologicznie rozwiązanie meblowe. Jego unikalna konstrukcja ' +
            'pozwala na płynne i ciche przesuwanie, ' +
            'co zapewnia łatwy dostęp do zawartości i lepszą użyteczność.',
    },
]

const MaterialsCollection = () => {

    return (
        <section className={style.collection}>
            <div className={`wrapper ${style.collection__wrapper}`}>
                <Material title={'Fronty'} materials={facades}/>
                <Material title={'Blaty'} materials={worktop}/>
                <Material title={'Podnośniki Blum'} materials={lift}/>
                <Material title={'Shuflyady Blum'} materials={box}/>
            </div>
        </section>
    );
};

export const Material = ({title, materials}: {
    title: string,
    materials: MaterialsProps[]
}) => {

    return (
        <>
            <div className={style.collection__header}>
                <h1 className={baskerville.className + ' ' + style.collection__title}>
                    {title}
                </h1>
            </div>
            <div className={style.collection__grid}>
                {materials.map((material) => {
                    return (<div key={material.title}>
                            <div className={style.collection__images}>
                                {material.images.map(image => {
                                    return (
                                        <figure
                                            key={image.id}
                                            className={style.collection__figure}>
                                            <Image src={image.src}
                                                   className={style.collection__image}
                                                   sizes="(min-width: 100px) 50vw, 100vw"
                                                   alt='Nowoczesna meble na wymiar'/>
                                        </figure>
                                    )
                                })}
                            </div>
                            <h3 className={baskerville.className + ' ' + style.collection__subtitle}>
                                {material.title}
                            </h3>
                            <p >
                                {material.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default MaterialsCollection;