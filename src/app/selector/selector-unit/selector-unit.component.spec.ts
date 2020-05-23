import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorUnitComponent } from './selector-unit.component';

describe('SelectorUnitComponent', () => {
  let component: SelectorUnitComponent;
  let fixture: ComponentFixture<SelectorUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
