import { Component, OnInit } from '@angular/core';
import { DonutResults, Donuts } from 'src/app/interface/donutitem';
import { DonutItemService } from 'src/app/service/donut-item.service';

@Component({
  selector: 'app-donutlist',
  templateUrl: './donutlist.component.html',
  styleUrls: ['./donutlist.component.css']
})
export class DonutlistComponent implements OnInit {

  constructor(private donutitemService : DonutItemService) { }

  results : DonutResults[] = [];
  ngOnInit(): void {
    this.donutitemService.fetchAllDonutInfo().subscribe(data=>{
      this.results = data.results;
    })
  }

}
