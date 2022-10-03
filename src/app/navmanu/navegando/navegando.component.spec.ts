import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegandoComponent } from './navegando.component';

describe('NavegandoComponent', () => {
  let component: NavegandoComponent;
  let fixture: ComponentFixture<NavegandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegandoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
