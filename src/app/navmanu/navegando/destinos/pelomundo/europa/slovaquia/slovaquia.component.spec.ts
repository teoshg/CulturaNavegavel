import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovaquiaComponent } from './slovaquia.component';

describe('SlovaquiaComponent', () => {
  let component: SlovaquiaComponent;
  let fixture: ComponentFixture<SlovaquiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlovaquiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlovaquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
