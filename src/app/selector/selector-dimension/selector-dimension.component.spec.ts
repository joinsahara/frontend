import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDimensionComponent } from './selector-dimension.component';

describe('SelectorDimensionComponent', () => {
  let component: SelectorDimensionComponent;
  let fixture: ComponentFixture<SelectorDimensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorDimensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
