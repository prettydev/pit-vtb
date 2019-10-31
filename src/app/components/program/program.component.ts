import { Component, OnInit,Input } from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'app-program',
  template: `<div class="program" data-block="program">
              <div class="titles">
                <h1>Programma</h1>
                <h3>Lees hieronder het programma van dag tot dag</h3>
              </div>

              <!-- <vtb-segments
                  [dataSource]="itinerary.segments"
                  [segmentFields]="[
                    { name: 'media', slider: true, sliderInterval: 3000, sliderControls: true },
                    { name: 'day', prefix: 'Dag ', tag: 'span' },
                    { name: 'title', tag: 'h2' },
                    { name: 'subTitle', tag: 'h4' },
                    { name: 'content', tag: 'p' }
                  ]"
                ></vtb-segments> -->

              <div class="custom-program">
                <div class="program-parent" *ngFor="let customprogram of this.program">
                  <div class="program-img" *ngIf="customprogram.content && customprogram.media?.length != 1">
                    <div *ngIf="customprogram.media?.length == 1">
                      <img src="{{ customprogram.media[0].url }}" alt="" />
                    </div>
                    <div class="silder-arrow" *ngIf="customprogram.media.length > 1">
                      <ngx-slick-carousel
                        class="carousel"
                        #slickModal="slick-carousel"
                        [config]="slideConfig"
                        (init)="slickInit($event)"
                        (breakpoint)="breakpoint($event)"
                        (afterChange)="afterChange($event)"
                        (beforeChange)="beforeChange($event)"
                      >
                        <div ngxSlickItem *ngFor="let slide of customprogram.media" class="slide">
                          <ul>
                            <li>
                              <img src="{{ slide.url }}" alt="" />
                            </li>
                          </ul>
                        </div>
                      </ngx-slick-carousel>
                    </div>

                  </div>
                  <div class="program-content" *ngIf="customprogram.content">
                    <span class="day">Dag {{ customprogram.day }} </span> 
                    <span *ngIf="customprogram.day != customprogram.day + customprogram.nights"> - {{ customprogram.day + customprogram.nights }} </span>
                    <h2 class="">{{ customprogram.title }}</h2>
                    <div innerHTML="{{ customprogram.content }}"></div>
                    <div class="daysinfo" *ngFor="let element of customprogram.elements">
                      <div *ngIf="element.unitId ==1 || element.unitId == 2">
                        <span class="bluetext">{{ element.date }} - {{ element.endDate }} </span> {{ element.nights }} <span *ngIf="element.nights == 1">nacht</span> <span *ngIf="element.nights > 1">nachten</span> {{ element.title }} -  <span class="bluetext">{{ element.subTitle }}</span> <span *ngIf="element.optional"> (optional)</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <!-- second div start of the program section -->
                <!-- <div class="program-parent">
                      <div class="program-img">
                        <img src="https://via.placeholder.com/350x350" />
                      </div>
                      <div class="program-content">
                        <span  class="day">Dag 2</span>
                        <h2 class=""> Vliegticket van Amsterdam Schiphol naar Singapore Airport  </h2>
                        <p>
                          U vertrekt op maandag 16 december 2019 om 10:25 uur 's morgens van Amsterdam Schiphol. U vliegt met Singapore Airlines, het vluchtnummer is SQ 323. De reisduur bedraagt 12 uren en 30 minuten (Non-stop). U komt aan op dinsdag 17 december 2019 om 05:55 uur 's morgens op Singapore Airport.
                        </p>
                        <div class="table-responsive">
                          <table><tbody><tr> <th>Vlucht vertrek</th> <th>Van</th> <th>Naar</th> <th>Aankomst</th> <th>Vluchtnr</th> <th>Duur</th> <th>Stop</th> </tr><tr> <td>maandag 16 december 2019 10:25 uur 's morgens</td> <td>Amsterdam Schiphol</td> <td>Singapore Airport</td> <td>dinsdag 17 december 2019 05:55 uur 's morgens</td> <td>SQ 323</td> <td>12 uren en 30 minuten</td> <td>(Non-stop)</td> </tr></tbody></table>
                        </div>
                      </div>
                  </div> -->
                <!-- <div>
                      <ul>
                        <li><angular-image-slider [images]="imagesUrl"></angular-image-slider></li>
                      </ul>
                  </div> -->

                <!-- You can now use your library component in app.component.html -->
              </div>
            

              
            </div>`,
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  @Input() itinerary: any;
  program: any[];
  startdate :Date;
  enddate :Date;
  datecount :Date;
  imageurl : any[];
  differenceDay : any[] =[];
  customDate :[];
  imagesUrl;
  previousDay: any = 1;
  segContent: string = '';
  months: any[];

  title = 'ngSlick';


  slides = [
    // {img: "https://via.placeholder.com/350x350"},
    // {img: "https://via.placeholder.com/350x351"},
    // {img: "https://via.placeholder.com/350x352"},
    // {img: "https://via.placeholder.com/350x353"},
    // {img: "https://via.placeholder.com/350x354"}
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": true,
    // "nextArrow":"<div class='custom-btn next-slide'></div>",
    // "prevArrow":"<div class='custom-btn prev-slide'></div>",
    "dots":false,
    "autoplay": false,
    "autoplaySpeed": 1500,
    "infinite": false
  };

  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }


  constructor() {


  }
  
  getSum(currentDay): number {
    
    if(currentDay === 0) {
      return 1;
    } else {
      //console.log('before = currentDay = ' + currentDay + " this.previousDay = " + this.previousDay);
      let abc = currentDay - this.previousDay;
      if(abc < 0) {
        abc = 0;
      }
      this.previousDay = currentDay;
      return abc;
    }

  }

  ngOnInit() {

    this.months = ['jan', 'feb', 'mrt', 'apr', 'mei', 'juni', 'juli', 'aug', 'sep', 'okt', 'nov', 'dec'];

    // this.imagesUrl = [
    //   'https://via.placeholder.com/350x350',
    //   'https://via.placeholder.com/300x300',
    //   'https://via.placeholder.com/400x400',
    //   ];

    this.program = [];
    let currentDay = 1;
    //var differenceDay : [];
     for (const seg of this.itinerary.segments) {
      
      for(const element of seg.elements) {
        if(element.unitId ==1 || element.unitId == 2) {
          var date = new Date(element.date);
          var endDate = new Date(element.endDate);
        
          element.date = date.getDate() + ' ' + this.months[date.getMonth()];
          element.endDate = endDate.getDate() + ' ' + this.months[endDate.getMonth()];
          
        }
      }

      if(seg.title){
        if(seg.title.includes('<')) {  
          seg.title = seg.title.substring(0, seg.title.indexOf('<') -1 );
        }
      }
      
      currentDay = seg.day;
      this.program.push(seg);
      
      
      }
      console.log('this.program123', this.program);
      ///console.log("difff" + this.differenceDay);
      // end of forloop
      
  }



}
