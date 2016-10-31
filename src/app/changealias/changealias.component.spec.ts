/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChangealiasComponent } from './changealias.component';

describe('ChangealiasComponent', () => {
  let component: ChangealiasComponent;
  let fixture: ComponentFixture<ChangealiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangealiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangealiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
