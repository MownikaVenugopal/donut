import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donutdetails } from 'src/app/interface/donutdetails';
import { DonutDeckService } from 'src/app/service/donut-deck.service';
import { DonutItemService } from 'src/app/service/donut-item.service';
import { CartComponent } from '../cart/cart.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {

  donut? : Donutdetails;
  constructor(    private route: ActivatedRoute,
    private donutApiService: DonutItemService,
    private deckService: DonutDeckService,
    private router : Router,
    private location : Location
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.donutApiService
        .fetchAllDonutById(parseInt(params['id']))
        .subscribe((data) => {
          this.donut = data;
        });
    });
  }

  addToCart() : void{
    if(this.donut){
      this.donut.qty = 1;
      this.deckService.addToDeck(this.donut);
      this.router.navigateByUrl('/');
          }
  }
  goBack():void{
    this.location.back();
  }

}
