import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { elementAt, VirtualTimeScheduler } from 'rxjs';
import { Donutdetails } from 'src/app/interface/donutdetails';
import { DonutDeckService } from 'src/app/service/donut-deck.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private deckService: DonutDeckService, private router : Router) { }
deck : Donutdetails[] = [];
orgData : Donutdetails[] = [];
totalCal: number = 0;
totalAmt: any =0;
qty : number = 0;
price : number = 1;
  ngOnInit(): void {
    this.deck = this.deckService.getDeck();
    this.orgData = this.deck;
    this.totalCalories(this.deck);
    this.totalPrice(this.deck);
    }

    removeFromDeck(donut: Donutdetails) {
      this.deckService.removeFromDeck(donut.id);
      this.reloadCurrentRoute();
    }
    totalCalories(deck: Donutdetails[]) : any{
      deck.forEach(element => {
        this.totalCal = this.totalCal + element.calories; 
      });
      return this.totalCal;
    }

totalPrice(deck: Donutdetails[]):any{

deck.forEach(ele =>{
this.totalAmt = this.totalAmt + ( ele.qty *  ele.price);
});
      return this.totalAmt 
    }
    reloadCurrentRoute() {
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
  }

//   addQty(donut: Donutdetails ,event : any): void{
//    donut.qty = event.value;
//    donut.calories = donut.calories* donut.qty;
//     this.totalCalories(this.deck);
//     this.reloadCurrentRoute();
//    }

//   update(donut: Donutdetails[]) : void{
// console.log(this.deck);

  
  //}
}
