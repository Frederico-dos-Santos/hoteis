import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerHotelComponent } from './drawer-hotel.component';

describe('DrawerHotelComponent', () => {
  let component: DrawerHotelComponent;
  let fixture: ComponentFixture<DrawerHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
