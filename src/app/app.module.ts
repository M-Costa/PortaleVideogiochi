import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaVideogiochiComponent } from './components/lista-videogiochi/lista-videogiochi.component';
import { DettaglioVideogiocoComponent } from './components/dettaglio-videogioco/dettaglio-videogioco.component';
import { ModificaListaComponent } from './components/modifica-lista/modifica-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaVideogiochiComponent,
    DettaglioVideogiocoComponent,
    ModificaListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
