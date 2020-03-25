import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  checkAdmin(){
    if(sessionStorage.getItem('user')===null){
    return false;
  }else{
    return sessionStorage.getItem('user')==='admin';

  }
}
}
