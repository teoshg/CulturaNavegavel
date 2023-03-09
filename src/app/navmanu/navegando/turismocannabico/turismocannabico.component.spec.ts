import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismocannabicoComponent } from './turismocannabico.component';

describe('TurismocannabicoComponent', () => {
  let component: TurismocannabicoComponent;
  let fixture: ComponentFixture<TurismocannabicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismocannabicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurismocannabicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
