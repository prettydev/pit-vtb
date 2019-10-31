import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialLinks: any;
  constructor() { }

  ngOnInit() {

    this.socialLinks = {
      facebook : 'https://www.facebook.com/pacificislandtravel.nl/',
      instagram: 'https://www.instagram.com/pacificislandtravel/',
      whatsapp: '',
      email: 'mailto:reisspecialist@pacificislandtravel.nl',
    }
  }

}
