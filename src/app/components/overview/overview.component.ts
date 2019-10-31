import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() itinerary: any;
  total: any;
  tickets:any;
  airport:any;
  reservation:any;
 

  constructor() { }

  ngOnInit() {
    //this.total = this.itinerary;
    this.total = this.itinerary.salesPriceBeforeRounding;
   
    
    //this.tickets  = this.itinerary.segments[0].elements[0].olPrices.costPrice + this.itinerary.segments[0].elements[0].olPrices.salesTotal;
     //this.airport  = this.itinerary.segments[0].elements[1].olPrices.costPrice + this.itinerary.segments[0].elements[1].olPrices.salesTotal; 
     
     //this.airport  = this.itinerary.segments[0].elements[0].olPrices.salesTotal;
     //this.airport  = this.itinerary.segments[0].elements[0].olPrices.salesTotal;
    this.reservation  = this.itinerary.segments[1].elements[0].olPrices.salesTotal;
    this.airport  = this.itinerary.segments[2].elements[1].olPrices.salesTotal;
    



  }

}
