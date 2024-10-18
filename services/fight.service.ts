// Añadir combate entre caballeros
engageCombat(player: string) {
  const opponent = player === 'player1' ? 'player2' : 'player1';
  const { row: playerRow, col: playerCol } = this.knightPositions[player];
  const { row: opponentRow, col: opponentCol } = this.knightPositions[opponent];

  if (this.areAdjacent(playerRow, playerCol, opponentRow, opponentCol)) {
    const result = this.fight(player); // Lógica de combate (puede ser piedra-papel-tijeras)
    if (result === player) {
      alert(`${player} ha ganado el combate!`);
      this.board[opponentRow][opponentCol] = null; // Eliminar caballero oponente
    } else {
      alert(`${opponent} ha ganado el combate!`);
      this.board[playerRow][playerCol] = null; // Eliminar caballero del jugador actual
    }
  }
}

// Función para verificar si los caballeros están adyacentes
areAdjacent(playerRow: number, playerCol: number, opponentRow: number, opponentCol: number): boolean {
  return Math.abs(playerRow - opponentRow) <= 1 && Math.abs(playerCol - opponentCol) <= 1;
}

// Simulación del combate tipo piedra-papel-tijeras
fight(player: string): string {
  const options = ['rock', 'paper', 'scissors'];
  const playerChoice = options[Math.floor(Math.random() * options.length)];
  const opponentChoice = options[Math.floor(Math.random() * options.length)];
  
  // Lógica de piedra-papel-tijeras
  if (playerChoice === opponentChoice) {
    return this.fight(player); // Reintentar si es empate
  } else if (
    (playerChoice === 'rock' && opponentChoice === 'scissors') ||
    (playerChoice === 'scissors' && opponentChoice === 'paper') ||
    (playerChoice === 'paper' && opponentChoice === 'rock')
  ) {
    return player;
  } else {
    return player === 'player1' ? 'player2' : 'player1';
  }
}
