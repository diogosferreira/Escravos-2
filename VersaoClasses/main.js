const viagens = new Map();

preencheViagensMap();

console.log(viagens.get(32999));
console.log(viagens.get(32999).teste);

viagens.get(32999).variavel = 4;
console.log(viagens.get(32999).variavel);
console.log(viagens.get(32999).teste);



function preencheViagensMap(){
	for (var i = 0; i < trips.cada.length; i++) {
		var id = parseInt(trips.cada[i].id);
		var a = parseInt(trips.cada[i].ano.substr(0, trips.cada[i].ano.indexOf('-')));
		var rP = trips.cada[i].regiao_compra;
		var rC = trips.cada[i].regiao_chegada;
		var e = parseInt(trips.cada[i].embarcados);
		var d = parseInt(trips.cada[i].desembarcados);
		
		viagens.set(id, new Viagem(id, a, rP, rC, e, d));
	}
}

//id, ano, regPartida, regChegada, embarcados, desembarcados, [LongPartida, LatPartida, LongChegada, LatChegada]