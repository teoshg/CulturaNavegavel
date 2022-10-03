import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanzaniaComponent } from './tanzania.component';

describe('TanzaniaComponent', () => {
  let component: TanzaniaComponent;
  let fixture: ComponentFixture<TanzaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanzaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanzaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
