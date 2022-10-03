import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontenegroComponent } from './montenegro.component';

describe('MontenegroComponent', () => {
  let component: MontenegroComponent;
  let fixture: ComponentFixture<MontenegroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontenegroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontenegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
