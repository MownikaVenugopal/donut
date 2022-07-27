import { Injectable } from '@angular/core';
import { Donutdetails } from '../interface/donutdetails';

@Injectable({
  providedIn: 'root'
})
export class DonutDeckService {

  constructor() { }
deck : Donutdetails[] = [];
  getDeck() : Donutdetails[] {
    return this.deck;
  }

  addToDeck(donut: Donutdetails) : void{
    donut.price = 1;
    if(!donut.qty) donut.qty++; 
    this.deck.push(donut);
  }
  removeFromDeck(id: number): void {
    const index = this.deck.findIndex((donut) => donut.id === id);
    if (index !== -1) {
      this.deck.splice(index, 1);
    }
  }
  isInDeck(id: number): boolean {
    return this.deck.some((donut) => donut.id === id);
  }
}
