var pc = "piedra";

var startGame = function (jugador) {
  if (jugador === pc) {
    console.log("Empate");
  } else if (jugador === "papel") {
    console.log("Perdiste :(");
  } else {
    console.log("Ganaste!!!!");
  }
};

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

startGame(tijera);
