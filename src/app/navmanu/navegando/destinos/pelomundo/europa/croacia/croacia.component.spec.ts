import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroaciaComponent } from './croacia.component';

describe('CroaciaComponent', () => {
  let component: CroaciaComponent;
  let fixture: ComponentFixture<CroaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroaciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CroaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
