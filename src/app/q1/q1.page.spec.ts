import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Q1Page } from './q1.page';

describe('Q1Page', () => {
  let component: Q1Page;
  let fixture: ComponentFixture<Q1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Q1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
