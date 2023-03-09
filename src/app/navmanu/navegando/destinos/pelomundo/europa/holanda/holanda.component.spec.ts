import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolandaComponent } from './holanda.component';

describe('HolandaComponent', () => {
  let component: HolandaComponent;
  let fixture: ComponentFixture<HolandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
