import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Seu carro é economico?', url: '/q1', icon: 'mail' }
  ];
  public labels = [''];
  constructor() {}
}
