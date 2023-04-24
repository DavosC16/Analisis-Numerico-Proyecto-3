import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolynomialPageRoutingModule } from './polynomial-routing.module';

import { PolynomialPage } from './polynomial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolynomialPageRoutingModule
  ],
  declarations: [PolynomialPage]
})
export class PolynomialPageModule {}
