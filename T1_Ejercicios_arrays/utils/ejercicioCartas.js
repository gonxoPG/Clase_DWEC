let baraja = [];
let palos = ["C", "T", "R", "P"];

for (let index = 0; index < palos.length; index++) {
  // recorre C T R P
  for (let i = 0; i <= 13; i++) {
    switch (i) {
      case 11:
        // baraja.push(new carta("J"+palos[index]));
        break;

      case 12:
        // baraja.push(new carta("Q"+palos[index]));
        break;

      case 13:
        // baraja.push(new carta("K"+palos[index]));
        break;

      default:
        // baraja.push(new carta(i+palos[index]));
        break;
    }
  }
}

baraja = _.suffle(baraja); // mezclo la baraja tras descargar la librería Underscore

class carta {
  // atributo (private, public, protected)
  valor;
  imagen;

  constructor(representacion) {
    this.imagen = `./${representacion}.png`;
    this.valor = representacion.substring(0, representacion.length - 1);

    // KC -> 10
    // 9C -> 9
    if (this.valor == "J" || this.valor == "K" || this.valor == "Q") {
      this.valor = 10;
    } else {
      this.valor = Number(this.valor);
    }
  }
}

    // empiezo a jugar -> la banca juega hasta que tenga una cuenta de 17 o mas
let cuentaBanca = 0;

while (cuentaBanca < 17) {
  cuentaBanca += baraja.pop().valor;
}

console.log(`La banca para de jugar porque tiene ${cuentaBanca}`);

    //IMPORTANTE: juega antes el jugador que la banca, por tema de llegar a la puntuación máixma
