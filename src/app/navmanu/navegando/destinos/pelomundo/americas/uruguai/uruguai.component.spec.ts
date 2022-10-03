import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UruguaiComponent } from './uruguai.component';

describe('UruguaiComponent', () => {
  let component: UruguaiComponent;
  let fixture: ComponentFixture<UruguaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UruguaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UruguaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
