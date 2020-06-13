import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupounsComponent } from './coupouns.component';

describe('CoupounsComponent', () => {
  let component: CoupounsComponent;
  let fixture: ComponentFixture<CoupounsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupounsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
