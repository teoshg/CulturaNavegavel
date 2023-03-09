import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UngriaComponent } from './ungria.component';

describe('UngriaComponent', () => {
  let component: UngriaComponent;
  let fixture: ComponentFixture<UngriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UngriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UngriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
