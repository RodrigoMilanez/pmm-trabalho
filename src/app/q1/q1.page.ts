import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.page.html',
  styleUrls: ['./q1.page.scss'],
})
export class Q1Page implements OnInit {

  mensagem = '';
  litros= 0;

  distancia = 0;

  kmpl = 0;

  constructor() {}

  

  clickKmpl() {
    this.kmpl= this.distancia/this.litros;
    if (this.kmpl >= 13) {
      this.mensagem =  `Economico, ${this.kmpl} Km por litro`;
    }else if (this.kmpl >= 10) {
      this.mensagem =  `Normal, ${this.kmpl} Km por litro`;
    } else {
      this.mensagem =  `Gastador, ${this.kmpl} Km por litro`;
    }

    
  }

  ngOnInit() {
  }

}
