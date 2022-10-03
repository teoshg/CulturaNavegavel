import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasilComponent } from './brasil.component';

describe('BrasilComponent', () => {
  let component: BrasilComponent;
  let fixture: ComponentFixture<BrasilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrasilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
