import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoteirosComponent } from './roteiros.component';

describe('RoteirosComponent', () => {
  let component: RoteirosComponent;
  let fixture: ComponentFixture<RoteirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoteirosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoteirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
