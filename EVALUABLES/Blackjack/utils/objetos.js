class carta {

    valor;
    imagen;

    constructor(representacion) {
        this.imagen = `./${representacion}.png`;
        this.valor = representacion.substring(0, representacion.length -1);

        if (this.valor == "J" || this.valor == "Q" || this.valor == "K") {

            this.valor = 10;

        } else {

            this.valor = Number(this.valor);

        }
    }
}