import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallawiComponent } from './mallawi.component';

describe('MallawiComponent', () => {
  let component: MallawiComponent;
  let fixture: ComponentFixture<MallawiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallawiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MallawiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
