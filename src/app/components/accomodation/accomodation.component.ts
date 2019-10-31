import { Component, OnInit, Input } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {

  @Input() itinerary: any;
  hotels:any[];
  model_content: any[];
  model_heading:any[];


  constructor() { }

  ngOnInit() {
    this.hotels = [];
    // console.log(this.itinerary.segments);
    for (const s of this.itinerary.segments) {
      for (const e of s.elements) {
        
        if(e.media != undefined && e.media[0] != undefined && e.media[0].url != ''){
          console.log(Math.random());
          console.log(e.media);
          let hotel = {
            title: e.title,
            subTitle: e.subTitle,
            picture: e.media[0].url,
            additionalText: e.additionalText
          };
          //console.log(picture);
          this.hotels.push(hotel);
        }
      }

    }
    console.log(this.hotels);

  }
  openModel(h) {
    //alert();
    console.log(988, h);
    this.model_content = h.additionalText;
    this.model_heading = h.title;

    $('.myModal').show();
    
  }
  closeModel(){
    $('.myModal').hide();
    
  }
}
