const customTransforms = {
  'test3': (obj, params) => {
    console.log(obj.src);
    console.log(obj.dst);
    console.log(params);
    return obj;
  },
  'createPlaceholderImages': (obj, params) => {
    obj.dst.segments.forEach(segment => {
      let neededImages = 9;
      if(segment.media.length < neededImages) {
        // let title = segment.subTitle;
        // if(!title) return;

        // let titleFrags = segment.subTitle.split('-');
        // if(!titleFrags.length) return;

        // let city = titleFrags[0].toLowerCase().trim();
        let imagesToCreate = neededImages - segment.media.length;
        
        for(let i = 0; i < imagesToCreate; i++) {
          // let image = (i == 0) ? city + '.jpg' : city + (i + 1) + '.jpg'; 
          
          // let resolution = ((imagesToCreate == 4 && i == 1) || (imagesToCreate == 3 && i == 0)) ? '85x150' : '150x150';
          if(segment.media[0]) {
            return
          } else {
            segment.media.push({
              'url': 'https://via.placeholder.com/350x350',
              'sourceType': 'mediaspirit'
            });
          }
          
        }
      }
    });

    return obj;
  }, 
  'youtubeSource': (obj, params) => {
    
    const locationCodes = {
      AU : 'Australië',
      NZ : 'Nieuw-Zeeland',
      HW : 'Hawaii',
      FJ : 'Fiji',
      CK : 'Cookeilanden',
      FP : 'Frans Polynesië',
      VN : 'Vanuatu',
      SM : 'Samoa',
     PNG : 'Papoea Nieuw-Guinea',
      NC : 'Nieuw Caledonië',
     SOL : 'Solomoneilanden',
      SP : 'de Pacific',
      TG : 'Tonga',
     IPC : 'Paaseiland',
      US : 'Amerika',
      CA : 'Canada',
      ZA : 'Zuid-Afrika',
     NAM : 'Namibië',
     ZAM : 'Zambia',
     MAL : 'Malawi',
     KEN : 'Kenia',
     TAN : 'Tanzania',
     RUN : 'La Réunion',
     SEY : 'Seychellen',
      MU : 'Mauritius',
     MDG : 'Madagaskar',
     BOT : 'Botswana',
     MOZ : 'Mozambique',
     ZIM : 'Zimbabwe',
      EU : 'Europa',
    };
    

    for(const extraFieldValue of obj.dst.extraFieldValues) {
      for(const field of extraFieldValue.fields) {
        if(field.name == 'bestemming1') {
          if(field.value == 'AU') {
            obj.dst.youtubeUrl = '';
          } else if(field.value == 'NZ') {
            obj.dst.youtubeUrl = '';
          }  else if(field.value == 'CK') {
            obj.dst.youtubeUrl = 'https://www.youtube.com/watch?v=QLByPNEi7_w';
          }
        }
      }
    }
    
    obj.dst.title = obj.dst.participants['party 1'][0].name + ' ' + obj.dst.participants['party 1'][0].surname + ' & ' + obj.dst.participants['party 1'][1].name + ' ' + obj.dst.participants['party 1'][1].surname;
    obj.dst.subTitle = locationCodes[obj.dst.extraFieldValues[0].fields[0].selected] + ' & ' + locationCodes[obj.dst.extraFieldValues[0].fields[1].value];
    //this.itinerary.subTitle = this.mappingService.countryByCode(this.itinerary.extraFieldValues[0].fields[0].selected) + ' & ' + this.mappingService.countryByCode(this.itinerary.extraFieldValues[0].fields[1].value);

    return obj;
  },
  'consultants': (obj, params) => {

    let consultantList = [
      {
        name : 'Lana Heere',
        email: 'lana@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist (iso Travel Consultant)',
        picture: 'http://media.wwtg.nl/square/md/Yara-cf7fad56.jpg',
      },
      {
        name : 'Jurgen Pol',
        email: 'jurgen@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist',
        picture: 'http://media.wwtg.nl/square/md/jurgen.jpg',
      },
      {
        name : 'Margret Stornebrink',
        email: 'margret@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist',
        picture: 'http://media.wwtg.nl/square/md/margret.jpg',
      },
      {
        name : 'Sylvie Jansen',
        email: 'sylvie@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist',
        picture: 'http://media.wwtg.nl/square/md/Sylvie-vulkaan.jpg',
      },
      {
        name : 'Marloes van Spijk',
        email: 'marloes@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist',
        picture: 'http://media.wwtg.nl/square/md/Marloes.jpg',
      },
      {
        name : 'Merel Geene',
        email: 'merel@pacificislandtravel.nl',
        phone: '020-6261325',
        title: 'Reisspecialist',
        picture: 'http://media.wwtg.nl/square/md/Merel-Timmer.JPG',
      }
    ];

    let finalConsultant = [];

    for( const data of obj.dst.extraFieldValues ) {
      
      for(const fielddata of data.fields) {
          if (fielddata.name == 'Reisspecialist') {
            for(const j of consultantList ) {
              if (j.name.indexOf(fielddata.value) !== -1) {
                finalConsultant.push(j);
              }
          }
        }
      }
      
    }

    obj.dst.consultants = finalConsultant;

    return obj;
  },
  'overviewCost': (obj, params) => {
    /*
    obj.dst.totalFee = obj.dst.salesPriceBeforeRounding;
    obj.dst.reservationFee  = obj.dst.segments[1].elements[0].olPrices.salesTotal;
    obj.dst.airportFee  = obj.dst.segments[2].elements[1].olPrices.salesTotal;
    */
    
    obj.dst.airportPrice = obj.dst.reservationPrice  = obj.dst.landPrice = obj.dst.totalPrice = 0;

    for(const segment of obj.dst.segments) {

      for(const element of segment.elements) {

        if(element.TSProduct.id == 1206) {

          obj.dst.airportPrice += parseFloat(element.olPrices.salesTotal);

        } else if(element.TSProduct.id == 12) {

          obj.dst.reservationPrice += parseFloat(element.olPrices.salesTotal);

        } else {
          
          obj.dst.landPrice += parseFloat(element.olPrices.salesTotal);

        }

      }          

    }

    obj.dst.airportPrice = obj.dst.airportPrice.toFixed(2);
    obj.dst.reservationPrice = obj.dst.reservationPrice.toFixed(2);
    obj.dst.landPrice = obj.dst.landPrice.toFixed(2);
    obj.dst.totalPrice = obj.dst.salesPriceBeforeRounding.toFixed(2);
    
    return obj;
  },
  'map': (obj, params) => {

    let markers = [];
    for (const seg of obj.dst.segments) {
        for (const element of seg.elements) {
            if(element.maps) {
              if(element.maps.latitude){
                markers.push(element.maps)
              }
            }
        }
    }
    obj.dst.markers = markers;
    return obj;
  },
  'accommodations': (obj, params) => {

    let hotels = [];
    for (const s of obj.dst.segments) {
      for (const e of s.elements) {
        
        if(e.media != undefined && e.media[0] != undefined && e.media[0].url != ''){
          let hotel = {
            title: e.title,
            subTitle: e.subTitle,
            picture: e.media[0].url,
            additionalText: e.additionalText
          };
          hotels.push(hotel);
        }
      }
    }
    obj.dst.hotels = hotels;
    return obj;
  },
  'program': (obj, params) => {

    var months = ['jan', 'feb', 'mrt', 'apr', 'mei', 'juni', 'juli', 'aug', 'sep', 'okt', 'nov', 'dec'];

    var program = [];
    var currentDay = 1;
    
    for (const seg of obj.dst.segments) {
      
      for(const element of seg.elements) {
        if(element.unitId ==1 || element.unitId == 2) {
          var date = new Date(element.date);
          var endDate = new Date(element.endDate);
        
          element.date = date.getDate() + ' ' + months[date.getMonth()];
          element.endDate = endDate.getDate() + ' ' + months[endDate.getMonth()];
          
        }
      }

      if(seg.title){
        if(seg.title.includes('<')) {  
          seg.title = seg.title.substring(0, seg.title.indexOf('<') -1 );
        }
      }
      
      currentDay = seg.day;
      program.push(seg); 
    }
    obj.dst.program = program;
    
    return obj;
  }
};

module.exports = customTransforms;
