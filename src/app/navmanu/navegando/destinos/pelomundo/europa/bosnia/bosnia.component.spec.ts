import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BosniaComponent } from './bosnia.component';

describe('BosniaComponent', () => {
  let component: BosniaComponent;
  let fixture: ComponentFixture<BosniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BosniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BosniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
