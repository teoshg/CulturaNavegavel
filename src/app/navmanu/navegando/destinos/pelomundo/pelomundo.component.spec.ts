import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelomundoComponent } from './pelomundo.component';

describe('PelomundoComponent', () => {
  let component: PelomundoComponent;
  let fixture: ComponentFixture<PelomundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelomundoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PelomundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
