import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NordesteComponent } from './nordeste.component';

describe('NordesteComponent', () => {
  let component: NordesteComponent;
  let fixture: ComponentFixture<NordesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NordesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NordesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
