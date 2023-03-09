import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmdiauruguaiComponent } from './umdiauruguai.component';

describe('UmdiauruguaiComponent', () => {
  let component: UmdiauruguaiComponent;
  let fixture: ComponentFixture<UmdiauruguaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmdiauruguaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmdiauruguaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
