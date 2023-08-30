import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  texto: string;

  constructor() {

    this.texto = '404 Page Not Found';


  }

  ngOnInit(): void {

  }

}
