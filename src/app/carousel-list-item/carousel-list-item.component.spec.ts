import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselListItemComponent } from './carousel-list-item.component';

describe('CarouselListItemComponent', () => {
  let component: CarouselListItemComponent;
  let fixture: ComponentFixture<CarouselListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
