import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Q4Page } from './q4.page';

describe('Q4Page', () => {
  let component: Q4Page;
  let fixture: ComponentFixture<Q4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Q4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
