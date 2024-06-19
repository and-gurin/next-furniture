import './globals.css';
import './_normalize.scss';
import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/header/Header';
import {raleWay} from '@/app/fonts';
import Footer from "@/components/footer/Footer";
import CookieConsent from "@/components/cookie/CookieConsent";

export const metadata: Metadata = {
  title: 'Twój dom, twoje zasady: meble wykonane na wymiar',
  description: 'Meble na wymiar ⭐ 2 unikalne projekty mebli w prezencie' +
      ' ⭐ Kuchnie, szafy, garderoby, meble do domu i biura' +
      ' ⭐ Ponad 20 lat doświadczenia'
      ,

  keywords: 'szafa do garderoby\n' +
      'meble do garderoby\n' +
      'garderoby\n' +
      'regały do garderoby\n' +
      'nowoczesne garderoby do przedpokoju\n' +
      'garderoby na wymiar\n' +
      'zabudowa garderoby\n' +
      'szafki do garderoby\n' +
      'sypialnia\n' +
      'meble sypialnia\n' +
      'szafa sypialnia\n' +
      'sypialnia meble\n' +
      'meble kuchenne białe połysk\n' +
      'meble białe\n' +
      'białe meble do sypialni\n' +
      'białe meble kuchenne\n' +
      'meble do salonu białe\n' +
      'białe meble do pokoju\n' +
      'białe meble\n' +
      'meble kuchenne białe\n' +
      'meble białe do salonu\n' +
      'białe meble do salonu\n' +
      'szafa z półkami\n' +
      'szafa dwudrzwiowa z półkami i drążkiem\n' +
      'regał z półkami\n' +
      'komoda z półkami\n' +
      'biurko z półkami\n' +
      'szafa dwudrzwiowa z półkami i drążkiem bodzio\n' +
      'meblościanki do salonu\n' +
      'meblościanki\n' +
      'mebloscianki\n' +
      'tanie meblościanki pokojowe z szafą\n' +
      'pojemne meblościanki z szafą\n' +
      'meblościanki z szafą i komodą\n' +
      'nowoczesne półki na ścianę\n' +
      'biała półka na ścianę\n' +
      'białe półki na ścianę\n' +
      'półka na ścianę\n' +
      'półki na ścianę\n' +
      'szafka rtv wisząca\n' +
      'szafka nocna wisząca\n' +
      'szafka pod telewizor wisząca\n' +
      'meble pokojowe olx\n' +
      'meble pokojowe\n' +
      'meble dla dzieci\n' +
      'regały pokojowe\n' +
      'regały\n' +
      'meble na wymiar\n' +
      'meble kuchenne na wymiar\n' +
      'meble łazienkowe na wymiar\n' +
      'meble do kuchni na wymiar\n' +
      'meble na wymiar online\n' +
      'meble kuchenne na wymiar cena\n' +
      'biurko narożne\n' +
      'biurko narozne\n' +
      'narożne biurko\n' +
      'biurko narożne z nadstawką\n' +
      'garderoba do przedpokoju\n' +
      'szafa garderoba\n' +
      'garderoba do przedpokoju z siedziskiem\n' +
      'garderoba z siedziskiem\n' +
      'garderoba na wymiar\n' +
      'garderoba przedpokój\n' +
      'garderoba narożna\n' +
      'biurko białe\n' +
      'szafa narożna\n' +
      'szafa narozna\n' +
      'szafa narożna biała\n' +
      'szafa narożna z lustrem\n' +
      'szafa narożna z nadstawką\n' +
      'szafa narożna na wymiar\n' +
      'szafa narożna do sypialni\n' +
      'biurko biale\n' +
      'białe biurko\n' +
      'biurko narożne białe\n' +
      'biurko białe z szufladami\n' +
      'białe biurko z szufladami\n' +
      'meble do łazienki\n' +
      'szafka do łazienki\n' +
      'szafki do łazienki\n' +
      'regał do łazienki\n' +
      'meble do lazienki\n' +
      'komoda do łazienki\n' +
      'szafka do lazienki\n' +
      'szafki wiszące do łazienki\n' +
      'szafki do lazienki\n' +
      'toaletki\n' +
      'toaletki z lustrem\n' +
      'lustro do toaletki\n' +
      'stołek do toaletki\n' +
      'meble do pokoju dziecięcego\n' +
      'szafa do pokoju dziecięcego\n' +
      'regał do pokoju dziecięcego\n' +
      'półki do pokoju dziecięcego\n' +
      'łóżko dla chłopca\n' +
      'meble młodzieżowe dla chłopca\n' +
      'meble dla chłopca\n' +
      'biurko dla chłopca\n' +
      'łóżko młodzieżowe dla chłopca\n' +
      'meble do pokoju chłopca\n' +
      'pokój młodzieżowy dla chłopca\n' +
      'regały kuchenne\n' +
      'regały na zabawki',
  openGraph: {
    type: "website",
    url: 'https://inhouse-meble.pl/',
    title: 'Twój dom, twoje zasady: meble wykonane na wymiar',
    description: 'Meble na wymiar ⭐ 2 unikalne projekty mebli w prezencie'  +
        ' ⭐ Kuchnie, szafy, garderoby, meble do domu i biura' +
        ' ⭐ Ponad 20 lat doświadczenia',
    images: [
      {
        url: 'https://inhouse-meble.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FModern-6-1.4ceba366.jpg&w=1080&q=75',
        alt: 'Nowoczesna kuchnia na wymiar'
      }
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
    <body >
    <Header/>
    <CookieConsent/>
    <main className={raleWay.className}>{children}</main>
    <Footer/>
    </body>
    </html>
  )
}
