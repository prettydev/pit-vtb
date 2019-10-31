import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { VtbComponentsModule } from '@sitespirit/vtb-component-library';

import { ItineraryResolver } from './resolvers/itinerary.resolver';

import { AppComponent } from './app.component';

import { MinisiteComponent } from './pages/minisite/minisite.component';
import { SliderModule } from 'angular-image-slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ModalModule } from 'angular-custom-modal';





import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/map/map.component';
import { FlightComponent } from './components/flight/flight.component';
import { ProgramComponent } from './components/program/program.component';
import { AccomodationComponent } from './components/accomodation/accomodation.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ConsultantComponent } from './components/consultant/consultant.component';




@NgModule({
  declarations: [
    AppComponent,
    MinisiteComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    MapComponent,
    FlightComponent,
    ProgramComponent,
    AccomodationComponent,
    OverviewComponent,
    ConsultantComponent
  ],
  imports: [
    BrowserModule,
    SliderModule,
    SlickCarouselModule,
    ModalModule,
    RouterModule.forRoot([{
      path: '',
      component: MinisiteComponent,
      pathMatch: 'full',
      resolve: {
        itinerary: ItineraryResolver
      }
    }
  ]),
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAp2Nko-n3uxEhNnXm1KqyBru2eXR_m1gM'
  }),
  HttpClientModule,
  VtbComponentsModule.forRoot(environment)
],
providers: [ItineraryResolver],
bootstrap: [AppComponent]
})
export class AppModule { }
