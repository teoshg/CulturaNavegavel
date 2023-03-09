import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustriaComponent } from './austria.component';

describe('AustriaComponent', () => {
  let component: AustriaComponent;
  let fixture: ComponentFixture<AustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AustriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
