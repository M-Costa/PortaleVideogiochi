import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';

@Component({
  selector: 'app-lista-videogiochi',
  templateUrl: './lista-videogiochi.component.html',
  styleUrls: ['./lista-videogiochi.component.scss']
})
export class ListaVideogiochiComponent implements OnInit {
  @Output()
  selectGameId: EventEmitter<number> = new EventEmitter()

  menuItems: GameItem[] = [
   { id: 1,
    nome:"fifa20",
    genere:"gioco sportivo",
    page:3,
    description:"simulatore di calcio",
   rating:5,
    prezzo:40,
    selected: true,
    annoUscita:new Date()
  },
  { id: 2,
    nome:"cod",
    genere:"fps",
    page:18,
    description:"spara tutto",
   rating:5,
    prezzo:40,
    selected: true,
    annoUscita:new Date()
  },
  { id: 3,
    nome:"SuperMarioBros",
    genere:"platform",
    page:3,
    description:"platform",
   rating:5,
    prezzo:40,
    selected: true,
    annoUscita:new Date()
  }
  
  ];
  constructor() { }

  ngOnInit(): void {
  }
  selectGameItem(id: number) {
    this.selectGameId.emit(id);
  }

}
