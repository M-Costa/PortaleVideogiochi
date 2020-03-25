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
import { LoginGuardServiceService } from './services/login-guard-service.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MenuServiceService } from './services/menu-service.service';
import { ModListGuardService } from './services/mod-list-guard.service';

const appRoutes: Routes = [
  {path: 'portale',canActivateChild:[LoginGuardServiceService], children:[
  { path: 'home', component: HomeComponent },
  { path: 'gameList',      component: ListaVideogiochiComponent },
  { path: 'modificaLista',      component: ModificaListaComponent, canActivate:[ModListGuardService]} ,
  { path: 'dettaglioVideogioco',      component: DettaglioVideogiocoComponent },

  ]},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login', component:LoginComponent, canActivate:[LoginGuardServiceService] },
  {path:'menu', component:MenuComponent, canActivate:[MenuServiceService]},
  {path:'**', component:ErrorPageComponent},
  {path:'header',component:HeaderComponent}

];

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    ListaVideogiochiComponent,
    DettaglioVideogiocoComponent,
    ModificaListaComponent,
    MenuComponent,
    LoginComponent,
    HeaderComponent,
    ErrorPageComponent
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
