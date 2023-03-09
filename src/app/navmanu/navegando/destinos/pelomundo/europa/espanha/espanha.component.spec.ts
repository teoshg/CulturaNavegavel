import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspanhaComponent } from './espanha.component';

describe('EspanhaComponent', () => {
  let component: EspanhaComponent;
  let fixture: ComponentFixture<EspanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspanhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
