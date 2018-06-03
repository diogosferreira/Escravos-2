class Linha {
  constructor(id, pPartida, pChegada) {
    this.id = id;
    this.pPartida = pPartida;
    this.pChegada = pChegada; //viagensHM.get(i).longChegada, viagensHM.get(i).latChegada

    this.stroke = 0.1;
    this.opacity = 0.2;
    this.cor = "#4155eb";

    this.ocurrencias = 1;
  }

  // // Getter
  // get anoG() {
  //   return this.ano;
  // }
  // // Method
  // anoM() {
  //   return this.ano;
  // }

  get linha(){
    var output =
    {
      'id': 'testa',
      'type': 'Feature',
      'properties': {
        'color': this.cor,
        'id': this.id,
        //"description": id,
        'line-width': this.stroke,
        'line-opacity': this.opacity,
      },
      'geometry': {
        'type': 'LineString',
        'coordinates': [
        this.pPartida,
        this.pChegada
        ]
      }
    }
    return output; 
  }

  actualiza(){
    this.stroke = 0.025 * this.ocurrencias;
    //this.opacity = 0.01 * this.ocurrencias;
  }

}

//id, ano, regPartida, regChegada, embarcados, desembarcados, LongPartida, LatPartida, LongChegada, LatChegada