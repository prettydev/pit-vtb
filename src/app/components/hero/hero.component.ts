import { Component, OnInit, Input } from '@angular/core';
import { MappingService } from 'src/app/services/mapping.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() itinerary: any;
  youtubeSource: any;
  newvalue : any;
  constructor(private mappingService: MappingService) {
   }

  ngOnInit() {
  	
    this.itinerary.title = this.itinerary.participants['party 1'][0].name + ' ' + this.itinerary.participants['party 1'][0].surname + ' & ' + this.itinerary.participants['party 1'][1].name + ' ' + this.itinerary.participants['party 1'][1].surname;

    this.itinerary.subTitle = this.mappingService.countryByCode(this.itinerary.extraFieldValues[0].fields[0].selected) + ' & ' + this.mappingService.countryByCode(this.itinerary.extraFieldValues[0].fields[1].value);

    for(const extraFieldValue of this.itinerary.extraFieldValues) {
      for(const field of extraFieldValue.fields) {
        if(field.name == 'bestemming1') {
          if(field.value == 'AU') {
            this.youtubeSource = '';
          } else if(field.value == 'NZ') {
            this.youtubeSource = '';
          }  else if(field.value == 'CK') {
            this.youtubeSource = 'https://www.youtube.com/watch?v=QLByPNEi7_w';
          }
        }
      }
    }

  }

}
