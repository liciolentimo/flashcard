import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashdetailsComponent } from './flashdetails.component';

describe('FlashdetailsComponent', () => {
  let component: FlashdetailsComponent;
  let fixture: ComponentFixture<FlashdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
