import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroOesteComponent } from './centro-oeste.component';

describe('CentroOesteComponent', () => {
  let component: CentroOesteComponent;
  let fixture: ComponentFixture<CentroOesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroOesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroOesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
