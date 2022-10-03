import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiaComponent } from './servia.component';

describe('ServiaComponent', () => {
  let component: ServiaComponent;
  let fixture: ComponentFixture<ServiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
