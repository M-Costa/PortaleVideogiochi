import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaListaComponent } from './modifica-lista.component';

describe('ModificaListaComponent', () => {
  let component: ModificaListaComponent;
  let fixture: ComponentFixture<ModificaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
