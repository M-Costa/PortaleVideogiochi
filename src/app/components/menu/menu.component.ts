import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/login');

  }
}
