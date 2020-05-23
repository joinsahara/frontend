import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AryanComponent } from './aryan.component';

describe('AryanComponent', () => {
  let component: AryanComponent;
  let fixture: ComponentFixture<AryanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AryanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AryanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
