class Linha {
  constructor(id, pPartida, pChegada, emb, des) {
    this.id = id;
    this.pPartida = pPartida;
    this.pChegada = pChegada; //viagensHM.get(i).longChegada, viagensHM.get(i).latChegada

    this.stroke = 0.1;
    this.opacity = 1;
    this.cor = "#2e2e2e";

    this.ocurrencias = 1;

    this.embarcados = emb;
    this.desembarcados = des;
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
    this.stroke = map_processing(this.ocurrencias, 0, 10000, 1, 10);
    //this.opacity = 0.01 * this.ocurrencias;
  }

  actualizaChegada(){
    this.stroke = map_processing(this.desembarcados, 0, 90000, 1, 5);
    //this.opacity = 0.01 * this.ocurrencias;
  }

  actualizaPartida(){
    this.stroke = map_processing(this.embarcados, 0, 100000, 1, 10);
    //this.opacity = 0.01 * this.ocurrencias;
  }
}

//id, ano, regPartida, regChegada, embarcados, desembarcados, LongPartida, LatPartida, LongChegada, LatChegada