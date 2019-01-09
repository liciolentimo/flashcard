import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcomponentComponent } from './flashcomponent.component';

describe('FlashcomponentComponent', () => {
  let component: FlashcomponentComponent;
  let fixture: ComponentFixture<FlashcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
