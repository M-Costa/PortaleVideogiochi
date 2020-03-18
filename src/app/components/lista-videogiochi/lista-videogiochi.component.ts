import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';
import { GameListServiceService } from 'src/app/services/game-list-service.service';

@Component({
  selector: 'app-lista-videogiochi',
  templateUrl: './lista-videogiochi.component.html',
  styleUrls: ['./lista-videogiochi.component.scss']
})
export class ListaVideogiochiComponent implements OnInit {
  gameItems: GameItem[];
  constructor(private listaService: GameListServiceService) {
    this.gameItems = this.listaService.getListaVideogiochi();
  }

  ngOnInit(): void {
  }


}