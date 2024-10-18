// Comprobar si el caballero fue eliminado
checkVictory() {
  if (this.board.every(row => row.every(cell => cell === 'block' || cell === 'player1' || cell === 'player2'))) {
    if (this.board.some(row => row.includes('player1')) && !this.board.some(row => row.includes('player2'))) {
      alert('¡Player 1 gana por eliminación!');
    } else if (this.board.some(row => row.includes('player2')) && !this.board.some(row => row.includes('player1'))) {
      alert('¡Player 2 gana por eliminación!');
    } else if (this.isBoardFull()) {
      this.declareWinnerByBlocks();
    }
  }
}

// Verificar si el tablero está lleno
isBoardFull(): boolean {
  return this.board.every(row => row.every(cell => cell !== null));
}

// Declarar el ganador según la cantidad de bloques
declareWinnerByBlocks() {
  const player1Blocks = this.countBlocks('player1');
  const player2Blocks = this.countBlocks('player2');
  if (player1Blocks > player2Blocks) {
    alert('¡Player 1 gana por control del tablero!');
  } else if (player2Blocks > player1Blocks) {
    alert('¡Player 2 gana por control del tablero!');
  } else {
    alert('¡Es un empate!');
  }
}

// Contar bloques colocados por un jugador
countBlocks(player: string): number {
  return this.board.flat().filter(cell => cell === player).length;
}
