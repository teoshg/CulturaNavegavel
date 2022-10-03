import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SulComponent } from './sul.component';

describe('SulComponent', () => {
  let component: SulComponent;
  let fixture: ComponentFixture<SulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
