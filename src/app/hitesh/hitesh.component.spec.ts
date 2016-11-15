/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HiteshComponent } from './hitesh.component';

describe('HiteshComponent', () => {
  let component: HiteshComponent;
  let fixture: ComponentFixture<HiteshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiteshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiteshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
