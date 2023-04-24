import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolynomialPage } from './polynomial.page';

const routes: Routes = [
  {
    path: '',
    component: PolynomialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolynomialPageRoutingModule {}
