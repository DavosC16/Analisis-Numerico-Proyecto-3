import { Component, OnInit } from '@angular/core';
import { interpolationNewton, getPolynomial, getCons, getX, getN } from '../services/variable.services';

@Component({
  selector: 'app-polynomial',
  templateUrl: './polynomial.page.html',
  styleUrls: ['./polynomial.page.scss'],
})
export class PolynomialPage implements OnInit {

  constructor() { }

  polynomial:any;

  numero: any = 0;

  newPoint: any;

  cons: any;
  
  x: any;

  n: any;

  ngOnInit() {
    interpolationNewton();
    this.polynomial=getPolynomial();
    this.cons=getCons();
    this.x=getX();
    this.n=getN();
  }

  setNewPoint(num: any){
    this.newPoint=this.cons[0];
    for(let i=1; i<this.n; i++){
      let aux=1;
      for(let j=1; j<=i; j++){
        aux=aux*(num-this.x[j-1]);
      }
      this.newPoint=this.newPoint+(this.cons[i]*aux);
    }
  }

}
