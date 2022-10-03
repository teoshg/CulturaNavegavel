import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaInterativoComponent } from './mapa-interativo.component';

describe('MapaInterativoComponent', () => {
  let component: MapaInterativoComponent;
  let fixture: ComponentFixture<MapaInterativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaInterativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaInterativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
