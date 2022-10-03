import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiasComponent } from './poesias.component';

describe('PoesiasComponent', () => {
  let component: PoesiasComponent;
  let fixture: ComponentFixture<PoesiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoesiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
