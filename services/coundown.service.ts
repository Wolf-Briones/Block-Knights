turnTimeLimit = 30; // Segundos
turnTimer: any;

startTurnTimer() {
  this.turnTimer = setInterval(() => {
    this.turnTimeLimit--;
    if (this.turnTimeLimit <= 0) {
      clearInterval(this.turnTimer);
      this.switchPlayer(); // Forzar el cambio de turno si el tiempo se agota
      alert(`${this.currentPlayer} se quedó sin tiempo. Cambiando de jugador.`);
    }
  }, 1000);
}

resetTurnTimer() {
  clearInterval(this.turnTimer);
  this.turnTimeLimit = 30;
  this.startTurnTimer();
}

// Llamar resetTurnTimer al cambiar de jugador
switchPlayer() {
  this.currentPlayer = this.currentPlayer === 'player1' ? 'player2' : 'player1';
  this.resetTurnTimer();
}
