import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {
  @Input() itinerary: any;

  consultants:any[];
  finalConsultants:string[] = new Array();
  consultname :any;
  text : any;
  consultData: any;
  constructor() { }

  ngOnInit() {

    // this.consultname = this.itinerary.extraFieldValues[0].fields[6].value;
    //   console.log("Consulat" + this.consultname)
    
    this.consultants = [
      {
        name : 'Lana Heere',
        email: 'lana@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist (iso Travel Consultant)',
        picture: 'assets/images/lana.jpg',
      },
      {
        name : 'Jurgen Pol',
        email: 'jurgen@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist',
        picture: 'assets/images/jurgen.jpg',
      },
      {
        name : 'Margret Stornebrink',
        email: 'margret@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist',
        picture: 'assets/images/margret.jpg',
      },
      {
        name : 'Sylvie Jansen',
        email: 'sylvie@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist',
        picture: 'assets/images/Sylvie-vulkaan.jpg',
      },
      {
        name : 'Marloes van Spijk',
        email: 'marloes@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist',
        picture: 'assets/images/Marloes.jpg',
      },
      {
        name : 'Merel Geene',
        email: 'merel@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist',
        picture: 'assets/images/Merel.jpg',
      }
    ];



      let customdata = this.itinerary.extraFieldValues;
      for( const data of customdata ){
        
        for(const fielddata of data.fields)
          {
            this.consultData = fielddata.value;
            //console.log("adat" + this.consultData);
            if (fielddata.name == 'Reisspecialist') {
              for(const j of this.consultants ){
                if (j.name.indexOf(fielddata.value) !== -1) {
                  this.finalConsultants.push(j);
                  // console.log('Hello World' + j.name + " <=> " + fielddata.value);
                }
            }
        
          }
        }
       
      }
      //console.log('this.finalConsultants', this.finalConsultants);
        // var res = this.consultants.filter(i => this.consultData.includes(i.name));
        // console.log("array found" + res);

      
    

    
  }

}
