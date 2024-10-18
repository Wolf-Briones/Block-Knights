game.service.tsimport { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  boardSize = 10; // Tablero 10x10
  board: any[][] = [];
  knightPositions = {
    player1: { row: 0, col: 0 },
    player2: { row: 9, col: 9 }
  };
  currentPlayer = 'player1';

  constructor() {
    this.initializeBoard();
  }

  // Inicializa el tablero vacío
  initializeBoard() {
    this.board = Array(this.boardSize)
      .fill(null)
      .map(() => Array(this.boardSize).fill(null));
    // Colocar los caballeros en el tablero
    this.board[0][0] = 'player1';
    this.board[9][9] = 'player2';
  }

  // Coloca un bloque en el tablero
  placeBlock(row: number, col: number) {
    if (!this.board[row][col]) {
      this.board[row][col] = 'block';
      this.switchPlayer();
    }
  }

  // Mueve el caballero
  moveKnight(player: string, newRow: number, newCol: number): boolean {
    const { row, col } = this.knightPositions[player];

    // Validar si la posición es válida (dentro del tablero y no ocupada)
    if (this.isValidMove(newRow, newCol)) {
      // Actualizar la posición del caballero
      this.board[row][col] = null; // Eliminar caballero de la posición anterior
      this.knightPositions[player] = { row: newRow, col: newCol };
      this.board[newRow][newCol] = player; // Colocar caballero en la nueva posición
      this.switchPlayer();
      return true;
    }
    return false;
  }

  // Verificar si un movimiento es válido
  isValidMove(row: number, col: number): boolean {
    return row >= 0 && row < this.boardSize && col >= 0 && col < this.boardSize && !this.board[row][col];
  }

  // Cambiar de jugador
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'player1' ? 'player2' : 'player1';
  }
}
