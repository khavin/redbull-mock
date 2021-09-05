import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedbullLogoComponent } from './redbull-logo.component';

describe('RedbullLogoComponent', () => {
  let component: RedbullLogoComponent;
  let fixture: ComponentFixture<RedbullLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedbullLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedbullLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
