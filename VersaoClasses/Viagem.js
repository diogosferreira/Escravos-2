class Viagem {
  constructor(id, ano, regPartida, regChegada, embarcados, desembarcados, LongPartida, LatPartida, LongChegada, LatChegada) {
    this.id = id;
    this.ano = ano;
    this.regPartida = regPartida;
    this.regChegada = regChegada;
    this.embarcados = embarcados;
    this.desembarcados = desembarcados;
    this.LongPartida;
    this.LongChegada;
    this.LatPartida;
    this.LatChegada;
    this.variavel = 1;
  }

  // // Getter
  // get anoG() {
  //   return this.ano;
  // }
  // // Method
  // anoM() {
  //   return this.ano;
  // }

  get teste(){
  	var output = 500 + this.variavel;
  	return output; 
  }

}

//id, ano, regPartida, regChegada, embarcados, desembarcados, LongPartida, LatPartida, LongChegada, LatChegada