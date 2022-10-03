import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarrocosComponent } from './marrocos.component';

describe('MarrocosComponent', () => {
  let component: MarrocosComponent;
  let fixture: ComponentFixture<MarrocosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarrocosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarrocosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
