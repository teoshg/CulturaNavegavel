import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlemanhaComponent } from './alemanha.component';

describe('AlemanhaComponent', () => {
  let component: AlemanhaComponent;
  let fixture: ComponentFixture<AlemanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlemanhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlemanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
