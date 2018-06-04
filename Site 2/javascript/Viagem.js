class Viagem {
  constructor(id, ano, regPartida, regChegada, embarcados, desembarcados, longPartida, latPartida, longChegada, latChegada) {
    this.id = id;
    this.ano = ano;
    this.regPartida = regPartida;
    this.regChegada = regChegada;
    this.embarcados = embarcados;
    this.desembarcados = desembarcados;
    this.longPartida = 0;
    this.longChegada = 0;
    this.latPartida = 0;
    this.latChegada = 0;
  }

  // // Getter
  // get anoG() {
  //   return this.ano;
  // }
  // // Method
  // anoM() {
  //   return this.ano;
  // }

}

//id, ano, regPartida, regChegada, embarcados, desembarcados, LongPartida, LatPartida, LongChegada, LatChegada