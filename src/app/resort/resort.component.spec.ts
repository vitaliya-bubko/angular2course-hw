/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResortComponent } from './resort.component';

describe('ResortComponent', () => {
  let component: ResortComponent;
  let fixture: ComponentFixture<ResortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
