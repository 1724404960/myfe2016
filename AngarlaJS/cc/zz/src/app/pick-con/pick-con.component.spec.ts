/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PickConComponent } from './pick-con.component';

describe('PickConComponent', () => {
  let component: PickConComponent;
  let fixture: ComponentFixture<PickConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
