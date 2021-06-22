import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesGridComponent } from './services-grid.component';

describe('ServicesGridComponent', () => {
  let component: ServicesGridComponent;
  let fixture: ComponentFixture<ServicesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
