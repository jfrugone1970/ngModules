import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Mi pagina de Home';

  }

  ngOnInit(): void {

  }

}
