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
                	'color': '#000000', // blue
                	'size': 6,
                	'id': this.nome,
                	//"description": city.cidade,
                	"stroke-color": '#000000',
                	"stroke-size": 0
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
                	'color': '#00ff00', // blue
                	'size': 6,
                	'id': this.nome,
                	//"description": city.cidade,
                	"stroke-color": '#000000',
                	"stroke-size": 0
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