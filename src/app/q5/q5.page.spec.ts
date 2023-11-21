import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Q5Page } from './q5.page';

describe('Q5Page', () => {
  let component: Q5Page;
  let fixture: ComponentFixture<Q5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Q5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
