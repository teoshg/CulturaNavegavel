import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuldesteComponent } from './suldeste.component';

describe('SuldesteComponent', () => {
  let component: SuldesteComponent;
  let fixture: ComponentFixture<SuldesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuldesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuldesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
