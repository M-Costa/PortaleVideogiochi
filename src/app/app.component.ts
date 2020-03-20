import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortaleVideogiochi';
  currentSection: number = 1;
  constructor(router: Router) {
    
    };
  
  }


