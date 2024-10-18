# Block-Knights
En "Block Knights", los jugadores controlan caballeros que se mueven en un tablero formado por bloques que caen de manera similar a las piezas de Tetris. El objetivo es tomar control estratégico del tablero y eliminar al caballero enemigo antes de que el tiempo o las piezas se agoten.


##Crear un juego como "Block Knights" en Angular requiere un enfoque estructurado para gestionar tanto la interfaz gráfica (tablero y piezas) como la lógica del juego. A continuación, te proporcionaré una base de código para comenzar el desarrollo. Esta implementación incluirá las mecánicas básicas de los movimientos de bloques y caballeros, así como la interacción entre los jugadores.

##Estructura del proyecto:
El proyecto de Angular para este juego tendría los siguientes componentes clave:

### Tablero (BoardComponent): Muestra el tablero y maneja las caídas de bloques.
### Caballero (KnightComponent): Representa la posición y movimientos del caballero de cada jugador.
### Controlador del juego (GameService): Gestiona la lógica del juego, como la colocación de bloques, movimiento de caballeros y reglas de victoria.
### Bloques (BlockComponent): Representa las piezas que los jugadores colocan.
