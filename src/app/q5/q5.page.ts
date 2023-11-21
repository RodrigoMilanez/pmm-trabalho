import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q5',
  templateUrl: './q5.page.html',
  styleUrls: ['./q5.page.scss'],
})
export class Q5Page {
  numero1: number = 0;
  numero2: number = 0;
  opr:number = 0;
  resultado: number =  0;


  constructor() {}

  calcular() {
    try {
      switch (this.opr) {
        case 1: this.resultado= this.numero1 + this.numero2; break;
        case 2: this.resultado= this.numero1 - this.numero2; break;
        case 3: this.resultado= this.numero1 * this.numero2; break;
        case 4: this.resultado= this.numero1 / this.numero2; break;
      }
      
    } catch (error) {
      alert('Ocorreu um erro ao avaliar a expressão');
    }
  }

  limpar() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.opr = 0;
    this.resultado = 0;
  }
}
