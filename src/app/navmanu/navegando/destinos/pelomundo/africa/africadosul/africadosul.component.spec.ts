import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricadosulComponent } from './africadosul.component';

describe('AfricadosulComponent', () => {
  let component: AfricadosulComponent;
  let fixture: ComponentFixture<AfricadosulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfricadosulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfricadosulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
