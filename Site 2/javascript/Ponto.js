class Ponto {
	constructor(tipo, nome, coordenadas, emb, des){
		this.tipo = tipo;
		this.nome = nome;
		this.coordenadas = coordenadas;
		this.embarcados = emb;
		this.desembarcados = des;
		this.viagens = 1;
	}

	get ponto(){
		if(this.tipo == "partida"){
			var output =
			{
				'id': 'ponto',
				'type': 'Feature',
				'properties': {
                	'color': '#ffffff',
                	'size': 5,
                	'id': this.nome,
                    'viagens': this.viagens,
                    'emb': this.embarcados,
                	//"description": city.cidade,
                	"stroke-color": '#000000',
                	"stroke-size": 1
                },
                'geometry': {
                	'type': 'Point',
                	'coordinates': [this.coordenadas[0], this.coordenadas[1]]
                }
            }
        } else{
			var output =
			{
				'id': 'ponto',
				'type': 'Feature',
				'properties': {
                	'color': '#ffc200',
                	'size': 5,
                	'id': this.nome,
                    'viagens': this.viagens,
                    'des': this.desembarcados,
                	"stroke-color": '#000000',
                	"stroke-size": 1
                },
                'geometry': {
                	'type': 'Point',
                	'coordinates': [this.coordenadas[0], this.coordenadas[1]]
                }
            }
        }

        return output;

    }
}