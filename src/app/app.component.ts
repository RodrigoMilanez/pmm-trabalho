import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Seu carro é economico?', url: '/q1', icon: 'none' },
    { title: 'Qual a sua faixa etária?', url: '/q2', icon: 'none' },
    { title: 'Qual o seu IMC?', url: '/q3', icon: 'none' },
    { title: 'Lista de tarefas a fazer', url: '/q4', icon: 'none' }
  ];
  public labels = [''];
  constructor() {}
}
