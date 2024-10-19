// Definir un bloque especial que destruye bloques adyacentes
placeSpecialBlock(row: number, col: number) {
  this.board[row][col] = 'special-block';
  this.destroyAdjacentBlocks(row, col);
}

// Destruye bloques alrededor del bloque especial
destroyAdjacentBlocks(row: number, col: number) {
  const positions = [
    [row - 1, col], [row + 1, col],
    [row, col - 1], [row, col + 1]
  ];

  positions.forEach(([r, c]) => {
    if (this.isValidMove(r, c) && this.board[r][c] === 'block') {
      this.board[r][c] = null; // Eliminar bloques adyacentes
    }
  });
}
