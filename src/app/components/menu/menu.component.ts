import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  selectMenuId: EventEmitter<number> = new EventEmitter()

  menuItems: MenuItem[] = [
    {
      id: 1, description: 'Home', selected: true
    },
    {
      id: 2, description: 'Lista Videogiochi', selected: true
    },
    {
      id: 3, description: 'Modifica', selected: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  selectMenuItem(id: number) {
    this.selectMenuId.emit(id);
  }
}
