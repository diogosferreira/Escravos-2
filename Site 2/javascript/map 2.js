/*INICIALIZAÇAO DO MAPA*/

var content;

var map;
var teste;

var idLayer = 0;
var idLayer1 = 5000;

var ate = 0;

const viagensHM = new Map();
const linhasHM = new Map();
const pontosPartidaHM = new Map();
const pontosChegadaHM = new Map();

var vista = 2;

preencheViagensMap();
adicionaLatLongViagensMap();


$(document).ready(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGlvZ29mZXJyZWlyYTM3IiwiYSI6ImNqOWZiMTR4OTJqM3MyeW53YzN6aGJkZjMifQ.4uRgggZMty_qeQhE8xxckA';

    // Set bounds
    var bounds = [
    [-160, -70], // Southwest coordinates
    [160, 80] // Northeast coordinates
    ];


    map = new mapboxgl.Map({
        container: 'map',
        //style: 'mapbox://styles/diogoferreira37/cjaoaqxke2sj32rrvbeyzffl2',
        style: 'mapbox://styles/diogoferreira37/cji0nqkjb3p312rn4s0k4sq3v',
        center: [-7.3828125, 12.382928338487396],
        zoom: 1.5,
        maxZoom: 7,
        //minZoom: 8,
        maxBounds: bounds // Sets bounds as max
        //preserveDrawingBuffer: true

    });






    map.on('load', function () {

        //desenhaLinhas(1566);



        //map.on('click', 'lines', function (e) {
        map.on('mouseenter', 'lines', function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;


            popup = new mapboxgl.Popup({
                    closeOnClick: true
                })
                .setLngLat(e.lngLat)
                .setHTML('<h1>Viagem</h1>')
                .addTo(map);
        });



        map.on('mouseleave', 'lines', function () {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });

        //For each
    });





    //TAMANHO DOS PONTOS CONSOANTE O ZOOM
    map.on('zoom', function () {
        zoom = map.getZoom();
        console.log(zoom + "   zoom");

        if (zoom < 2.5) {
            vista = 1;
            desenhaVista1();
        } else {
            vista = 2;
            desenhaVista2();
        }

    });

    //MAPA
});

function desenhaVista2() {

    preparaLayerLinhas();
    preparaLayerPontos();

    linhasHM.clear();
    linhasMapVista2();
    pontosPartidaHM.clear();
    pontosChegadaHM.clear();
    pontosPartidaVista2();
    pontosChegadaVista2();

    for (var i = 0; i < linhasHM.size; i++) {
        teste.source.data.features.push(linhasHM.get(i).linha);
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

function preparaLayerLinhas() {

    if (idLayer > 0) {
        map.removeLayer(idLayer);
    }

    idLayer++;


    teste = {
        'id': String(idLayer),
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': []
            }
        },
        'paint': {
            'line-width': ['get', 'line-width'],
            'line-opacity': ['get', 'line-opacity'],
            'line-color': ['get', 'color']
        }
    }
}

function preparaLayerPontos() {

    if (idLayer1 > 5000) {
        map.removeLayer(idLayer1);
    }

    idLayer1++;

    pontos = {
        'id': String(idLayer1),
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': []
            }
        },
        'paint': {
            'circle-radius': ['get', 'size'],
            'circle-stroke-color': ['get', 'stroke-color'],
            'circle-stroke-width': ['get', 'stroke-size'],
            'circle-color': ['get', 'color']
        }
    }
}

function preencheViagensMap() {
    for (var i = 0; i < trips.cada.length; i++) {
        var id = parseInt(trips.cada[i].id);
        var a = parseInt(trips.cada[i].ano.substr(0, trips.cada[i].ano.indexOf('-')));
        var rP = trips.cada[i].regiao_compra;
        var rC = trips.cada[i].regiao_chegada;
        var e = parseInt(trips.cada[i].embarcados);
        var d = parseInt(trips.cada[i].desembarcados);

        viagensHM.set(i, new Viagem(id, a, rP, rC, e, d));
    }
}

function adicionaLatLongViagensMap() {
    for (var i = 0; i < regiao.cada.length; i++) {
        for (var j = 0; j < viagensHM.size; j++) {
            if (viagensHM.get(j).regPartida == regiao.cada[i].region) {
                viagensHM.get(j).longPartida = regiao.cada[i].long;
                viagensHM.get(j).latPartida = regiao.cada[i].lat;
            }

            if (viagensHM.get(j).regChegada == regiao.cada[i].region) {
                viagensHM.get(j).longChegada = regiao.cada[i].long;
                viagensHM.get(j).latChegada = regiao.cada[i].lat;
            }
        }
    }
}

function linhasMapVista2() {
    for (var i = 0; i < viagensHM.size; i++) {
        var entrou = false;
        var pPartida = [viagensHM.get(i).longPartida, viagensHM.get(i).latPartida];
        var pChegada = [viagensHM.get(i).longChegada, viagensHM.get(i).latChegada];
        if (viagensHM.get(i).ano >= ano_inicial && viagensHM.get(i).ano <= ano_final) {
            if (linhasHM.size > 0) {
                var j = 0;
                while (!entrou) {
                    if (pPartida[0] == linhasHM.get(j).pPartida[0] && pPartida[1] == linhasHM.get(j).pPartida[1] && pChegada[0] == linhasHM.get(j).pChegada[0] && pChegada[1] == linhasHM.get(j).pChegada[1]) {
                        linhasHM.get(j).ocurrencias += 1;
                        linhasHM.get(j).actualiza();
                        entrou = true;
                        break;
                    }
                    if (j == linhasHM.size - 1 && !entrou) {
                        linhasHM.set(linhasHM.size, new Linha(linhasHM.size, pPartida, pChegada));
                        entrou = true;
                        break;
                    }
                    j++;
                }
            } else {
                linhasHM.set(0, new Linha(0, pPartida, pChegada));
            }
        }
    }
}

function pontosPartidaVista2() {
    for (var i = 0; i < viagensHM.size; i++) {

        var entrou = false;

        var rPartida = viagensHM.get(i).regPartida;

        var pPartida = [viagensHM.get(i).longPartida, viagensHM.get(i).latPartida];

        var emb = viagensHM.get(i).embarcados;

        if (viagensHM.get(i).ano >= ano_inicial && viagensHM.get(i).ano <= ano_final) {

            if (pontosPartidaHM.size > 0) {
                var j = 0;
                while (!entrou) {
                    if (rPartida == pontosPartidaHM.get(j).nome) {
                        pontosPartidaHM.get(j).embarcados += emb;
                        pontosPartidaHM.get(j).viagens += 1;
                        entrou = true;
                        break;
                    }
                    if (j == pontosPartidaHM.size - 1 && !entrou) {
                        pontosPartidaHM.set(pontosPartidaHM.size, new Ponto("partida", rPartida, pPartida, emb, 0));
                        entrou = true;
                        break;
                    }
                    j++;
                }
            } else {
                pontosPartidaHM.set(0, new Ponto("partida", rPartida, pPartida, emb, 0));
            }

        }
    }
}

function pontosChegadaVista2() {
    for (var i = 0; i < viagensHM.size; i++) {

        var entrou = false;

        var rChegada = viagensHM.get(i).regChegada;

        var pChegada = [viagensHM.get(i).longChegada, viagensHM.get(i).latChegada];

        var des = viagensHM.get(i).desembarcados;

        if (viagensHM.get(i).ano >= ano_inicial && viagensHM.get(i).ano <= ano_final) {

            if (pontosChegadaHM.size > 0) {
                var j = 0;
                while (!entrou) {
                    if (rChegada == pontosChegadaHM.get(j).nome) {
                        pontosChegadaHM.get(j).desembarcados += des;
                        pontosChegadaHM.get(j).viagens += 1;
                        entrou = true;
                        break;
                    }
                    if (j == pontosChegadaHM.size - 1 && !entrou) {
                        pontosChegadaHM.set(pontosChegadaHM.size, new Ponto("chegada", rChegada, pChegada, 0, des));
                        entrou = true;
                        break;
                    }
                    j++;
                }
            } else {
                pontosChegadaHM.set(0, new Ponto("chegada", rChegada, pChegada, 0, des));
            }
        }
    }
}
