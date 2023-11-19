import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.page.html',
  styleUrls: ['./q3.page.scss'],
})
export class Q3Page implements OnInit {

  altura = 0.0;
  peso = 0.0;
  IMC =0;
  mensagem = '';
  diagnostico = "";

  constructor() { }

  clickIMC(){
    this.IMC = this.peso / (this.altura*this.altura);
    this.mensagem= `Seu IMC é de ${this.IMC} `;

    if (this.IMC < 16) {
      this.diagnostico='Diagnostico: Magreza Grave';
    } else if (this.IMC <17) {
      this.diagnostico='Diagnostico: Magreza moderada';
    }else if (this.IMC <18.5) {
      this.diagnostico='Diagnostico: Magreza leve';
    }else if (this.IMC <25) {
      this.diagnostico='Diagnostico: Saudavel';
    }else if (this.IMC <30) {
      this.diagnostico='Diagnostico: Sobrepeso';
    }else if (this.IMC <35) {
      this.diagnostico='Diagnostico: Obesidade grau 1';
    }else if (this.IMC <40) {
      this.diagnostico='Diagnostico: Obesidade grau 2 (Severa)';
    }else {
      this.diagnostico='Diagnostico: Obesidade mórbida';
    }
  }

  ngOnInit() {
  }

}
