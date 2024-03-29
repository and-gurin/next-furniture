import {Libre_Baskerville, Raleway} from "next/font/google";

export const raleWay = Raleway({
    style: ['normal'],
    subsets: ['latin'],
})
export const baskerville = Libre_Baskerville({
    style: ['normal', "italic"],
    weight: ['700', '400'],
    subsets: ['latin']
})