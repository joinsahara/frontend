import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselResultComponent } from './carousel-result.component';

describe('CarouselResultComponent', () => {
  let component: CarouselResultComponent;
  let fixture: ComponentFixture<CarouselResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
