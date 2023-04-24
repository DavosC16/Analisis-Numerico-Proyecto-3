import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getN, setPoints } from '../services/variable.services';

@Component({
  selector: 'app-points',
  templateUrl: './points.page.html',
  styleUrls: ['./points.page.scss'],
})
export class PointsPage implements OnInit {

  constructor(private router: Router) { }

  n=getN();

  x=new Array();
  y=new Array();
  points=new Array();

  ngOnInit() {
    for(let i=0; i<this.n; i++){
      this.points[i]=0;
      this.x[i]=0;
      this.y[i]=0;
    }
  }

  Click(){
    setPoints(this.x, this.y);
    this.router.navigateByUrl("/polynomial");
  }
}
