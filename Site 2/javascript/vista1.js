function desenhaVista1(){

	preparaLayer();

	linhasHM.clear();
	linhasMapVista1();

	for (var i = 0; i < linhasHM.size; i++) {
		teste.source.data.features.push(linhasHM.get(i).linha);
	}

	map.addLayer(teste);

}

function linhasMapVista1(){
	for (var i = 0; i < viagensHM.size; i++) {

		var parou = false;

		var regiaoP = viagensHM.get(i).regPartida;
		var regiaoC = viagensHM.get(i).regChegada;

		var nPartidas = viagensHM.get(i).embarcados;
		var nChegadas = viagensHM.get(i).desembarcados;

		if (viagensHM.get(i).ano >= ano_inicial && viagensHM.get(i).ano <= ano_final) {






			if(linhasHM.size > 0){
				while(!entrou){
					if (pPartida[0] == linhasHM.get(j).pPartida[0] && pPartida[1] == linhasHM.get(j).pPartida[1] && pChegada[0] == linhasHM.get(j).pChegada[0] && pChegada[1] == linhasHM.get(j).pChegada[1]){
						linhasHM.get(j).ocurrencias += 1;
						linhasHM.get(j).actualiza();
						entrou = true;
						break;
					}
					if(j == linhasHM.size - 1 && !entrou){
						linhasHM.set(linhasHM.size, new Linha(linhasHM.size, pPartida, pChegada));
						entrou = true;
						break;
					}
					j++;
				}
			} else {
				linhasHM.set()
				linhasHM.set(0, new Linha(0, pPartida, pChegada));
			}
		}
	}
}

function pontoMedioTeste(){
	return [-35.15625, 15.961329081596647];
}