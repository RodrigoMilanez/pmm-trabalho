import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q3PageRoutingModule } from './q3-routing.module';

import { Q3Page } from './q3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q3PageRoutingModule
  ],
  declarations: [Q3Page]
})
export class Q3PageModule {}
