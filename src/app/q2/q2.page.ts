import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.page.html',
  styleUrls: ['./q2.page.scss'],
})
export class Q2Page implements OnInit {
  idade = 0;
  nascimento= 0;
  mensagem = '';
  anoAtual= new Date().getFullYear() ;

  constructor() { }

  clickIdade() {
    this.idade =this.anoAtual- this.nascimento ;

    if (this.idade <= 12) {
      this.mensagem =  `${this.idade} anos, Criança`;
    } else if (this.idade <= 17) {
      this.mensagem =  `${this.idade} anos, Adolescente`;
    } else if(this.idade <= 59) {
      this.mensagem =  `${this.idade} anos, Adulto`;
    } else {
      this.mensagem =  `${this.idade} anos, Idoso`;
    } 
  }

  ngOnInit() {
  }

}
