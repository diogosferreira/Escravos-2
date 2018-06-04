function desenhaVista1(){

	preparaLayerLinhas();
	preparaLayerPontos();

	
	linhasPartidaHM.clear();
	linhasChegadaHM.clear();
	linhasHM.clear();
	linhasMapVista2();
	linhasChegadaVista1();
	linhasHM.clear();
	linhasMapVista2();
	linhasPartidaVista1();
	pontosPartidaHM.clear();
	pontosChegadaHM.clear();
	pontosPartidaVista2();
	pontosChegadaVista2();

	for (var i = 0; i < linhasChegadaHM.size; i++) {
		teste.source.data.features.push(linhasChegadaHM.get(i).linha);
	}

	for (var i = 0; i < linhasPartidaHM.size; i++) {
		teste.source.data.features.push(linhasPartidaHM.get(i).linha);
	}

	for (var i = 0; i < pontosChegadaHM.size; i++) {
		pontos.source.data.features.push(pontosChegadaHM.get(i).ponto);
	}

	for (var i = 0; i < pontosPartidaHM.size; i++) {
		pontos.source.data.features.push(pontosPartidaHM.get(i).ponto);
	}

	map.addLayer(teste);
	map.addLayer(pontos);

}

function linhasChegadaVista1() {
	for (var i = 0; i < linhasHM.size; i++) {
		entrou = false;
		var pPartida = linhasHM.get(i).pPartida;
		var pChegada = linhasHM.get(i).pChegada;
		var pMedio = [pPartida[0] - 20, pPartida[1]];
		if (linhasChegadaHM.size > 0) {
			var j = 0;
			while (!entrou) {
				if (pChegada == linhasChegadaHM.get(j).pChegada) {
					linhasHM.get(i).pPartida = pMedio;
					linhasChegadaHM.set(linhasChegadaHM.size, linhasHM.get(i));
					entrou = true;
					break;
				}
				if (j == linhasChegadaHM.size - 1 && !entrou) {
					linhasHM.get(i).pPartida = pMedio;
					linhasChegadaHM.set(linhasChegadaHM.size, linhasHM.get(i));
					entrou = true;
					break;
				}
				j++;
			}
		} else {
			linhasHM.get(0).pPartida = pMedio;
			linhasChegadaHM.set(0, linhasHM.get(0));
		}

	}

	for (var z = 0; z < linhasChegadaHM.size; z++) {
		linhasChegadaHM.get(z).actualizaPartida();
	}
}


function linhasPartidaVista1() {
	for (var i = 0; i < linhasHM.size; i++) {
		entrou = false;
		var pPartida = linhasHM.get(i).pPartida;
		var pChegada = linhasHM.get(i).pChegada;
		var pMedio = [pPartida[0] - 20, pPartida[1]];

		if (linhasPartidaHM.size > 0) {
			var j = 0;
			while (!entrou) {
				if (pPartida == linhasPartidaHM.get(j).pPartida) {
					linhasHM.get(i).pChegada = pMedio;
					linhasPartidaHM.set(linhasPartidaHM.size, linhasHM.get(i));
					entrou = true;
					break;
				}
				if (j == linhasPartidaHM.size - 1 && !entrou) {
					linhasHM.get(i).pChegada = pMedio;
					linhasPartidaHM.set(linhasPartidaHM.size, linhasHM.get(i));
					entrou = true;
					break;
				}
				j++;
			}
		} else {
			linhasHM.get(0).pChegada = pMedio;
			linhasPartidaHM.set(0, linhasHM.get(0));
		}

	}

	for (var z = 0; z < linhasPartidaHM.size; z++) {
		linhasPartidaHM.get(z).actualizaPartida();
	}
}