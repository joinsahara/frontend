import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypurchaseComponent } from './mypurchase.component';

describe('MypurchaseComponent', () => {
  let component: MypurchaseComponent;
  let fixture: ComponentFixture<MypurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
