import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicaChecaComponent } from './republica-checa.component';

describe('RepublicaChecaComponent', () => {
  let component: RepublicaChecaComponent;
  let fixture: ComponentFixture<RepublicaChecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepublicaChecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepublicaChecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
