import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajensComponent } from './viajens.component';

describe('ViajensComponent', () => {
  let component: ViajensComponent;
  let fixture: ComponentFixture<ViajensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
