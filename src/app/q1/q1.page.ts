import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.page.html',
  styleUrls: ['./q1.page.scss'],
})
export class Q1Page implements OnInit {

  mensagem = '';
  nome: string = '';

  constructor() {}

  clickNome() {
    this.mensagem = this.nome
      ? `Hello world, ${this.nome.trim()}!`
      : '';
  }

  ngOnInit() {
  }

}