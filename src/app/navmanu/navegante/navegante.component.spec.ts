import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveganteComponent } from './navegante.component';

describe('NaveganteComponent', () => {
  let component: NaveganteComponent;
  let fixture: ComponentFixture<NaveganteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaveganteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaveganteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
