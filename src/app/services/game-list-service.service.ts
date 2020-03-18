import { Injectable } from '@angular/core';
import { GameItem } from '../model/game-item';

@Injectable({
  providedIn: 'root'
})
export class GameListServiceService {
  private List: GameItem[]= [
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

  getListaVideogiochi()
  {
    return this.List;
  }
  constructor() { }
}//TODO: da finire 
