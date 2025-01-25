import {Playfair_Display, Raleway} from "next/font/google";

export const raleWay = Raleway({
    style: ['normal'],
    subsets: ['latin', 'cyrillic'],
})
export const baskerville = Playfair_Display({
    style: ['normal', "italic"],
    weight: ['700', '400'],
    subsets: ['latin']
})
export const play = Playfair_Display({
    style: ['normal', "italic"],
    weight: ['700', '400', '900'],
    subsets: ['latin', 'cyrillic']
})