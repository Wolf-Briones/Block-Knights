import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor(public gameService: GameService) {}

  ngOnInit(): void {}

  // Manejar clics en el tablero (para colocar bloques o mover caballeros)
  handleCellClick(row: number, col: number) {
    if (this.gameService.board[row][col] === null) {
      this.gameService.placeBlock(row, col);
    }
  }

  moveKnight(player: string, newRow: number, newCol: number) {
    if (this.gameService.currentPlayer === player) {
      this.gameService.moveKnight(player, newRow, newCol);
    }
  }
}
