import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVideogiochiComponent } from './lista-videogiochi.component';

describe('ListaVideogiochiComponent', () => {
  let component: ListaVideogiochiComponent;
  let fixture: ComponentFixture<ListaVideogiochiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVideogiochiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVideogiochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
