import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-q5',
  templateUrl: './q5.page.html',
  styleUrls: ['./q5.page.scss'],
})
export class Q5Page {
  numero1:number = 0;
  numero2:number = 0;
  public opr = "";
  resultado: number =  0;


  constructor() {}

  calcular() {
      switch (this.opr) {
        case "1": this.resultado=  (+this.numero2) + (+this.numero1)  ; break;
        case "2": this.resultado= this.numero1 - this.numero2; break;
        case "3": this.resultado= this.numero1 * this.numero2; break;
        case "4": this.resultado= this.numero1 / this.numero2; break;
      }
    console.log(this.resultado);
  }

  limpar() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.opr = "";
    this.resultado = 0;
  }
}
