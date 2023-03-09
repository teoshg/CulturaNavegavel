import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancaComponent } from './franca.component';

describe('FrancaComponent', () => {
  let component: FrancaComponent;
  let fixture: ComponentFixture<FrancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrancaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
