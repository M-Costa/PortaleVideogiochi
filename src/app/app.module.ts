import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaVideogiochiComponent } from './components/lista-videogiochi/lista-videogiochi.component';
import { DettaglioVideogiocoComponent } from './components/dettaglio-videogioco/dettaglio-videogioco.component';
import { ModificaListaComponent } from './components/modifica-lista/modifica-lista.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login', component:LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gameList',      component: ListaVideogiochiComponent },
  { path: 'modificaLista',      component: ModificaListaComponent },
  { path: 'dettaglioVideogioco',      component: DettaglioVideogiocoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaVideogiochiComponent,
    DettaglioVideogiocoComponent,
    ModificaListaComponent,
    MenuComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
     
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
