import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PolynomialPage } from './polynomial.page';

describe('PolynomialPage', () => {
  let component: PolynomialPage;
  let fixture: ComponentFixture<PolynomialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PolynomialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
