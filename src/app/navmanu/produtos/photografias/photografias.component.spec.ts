import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotografiasComponent } from './photografias.component';

describe('PhotografiasComponent', () => {
  let component: PhotografiasComponent;
  let fixture: ComponentFixture<PhotografiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotografiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotografiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
