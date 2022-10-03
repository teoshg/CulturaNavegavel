import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsloveniaComponent } from './eslovenia.component';

describe('EsloveniaComponent', () => {
  let component: EsloveniaComponent;
  let fixture: ComponentFixture<EsloveniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsloveniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsloveniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
