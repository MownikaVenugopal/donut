import { CurrencyPipe } from "@angular/common";

export interface Donutdetails {
    id: number,
    ref: string,
    name: string,
    calories: number,
    extras:string[],
    photo: string,
    photo_attribution: string,
    qty : number,
    price : number
}
