import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZimbabueComponent } from './zimbabue.component';

describe('ZimbabueComponent', () => {
  let component: ZimbabueComponent;
  let fixture: ComponentFixture<ZimbabueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZimbabueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZimbabueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
