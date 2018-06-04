/*INICIALIZAÇAO DO MAPA*/

var content;

var map;
var teste;

var idLayer = 0;

var ate = 0;
<<<<<<< HEAD

const viagensHM = new Map();
const linhasHM = new Map();
const pontosPartidaHM = new Map();
const pontosChegadaHM = new Map();

var vista = 2;

=======

const viagensHM = new Map();
const linhasHM = new Map();

>>>>>>> 78523226cf72b4b834c34baa99497fd36ffd570b
preencheViagensMap();
adicionaLatLongViagensMap();


$(document).ready(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGlvZ29mZXJyZWlyYTM3IiwiYSI6ImNqOWZiMTR4OTJqM3MyeW53YzN6aGJkZjMifQ.4uRgggZMty_qeQhE8xxckA';

    // Set bounds
    var bounds = [
    [30, -90], // Southwest coordinates
    [10, 90] // Northeast coordinates
    ];


    map = new mapboxgl.Map({
        container: 'map',
        //style: 'mapbox://styles/diogoferreira37/cjaoaqxke2sj32rrvbeyzffl2',
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-8.426084518432617, 40.20739355701786],
        zoom: 1,
        maxZoom: 16.1,
        //minZoom: 8,
        //maxBounds: bounds, // Sets bounds as max
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
        // zoom = map.getZoom();
        // console.log(zoom + "   zoom");
        // desenhaPontos();
    });

    //MAPA
});

function desenhaVista2() {

    preparaLayer();

    linhasHM.clear();
    linhasMapVista2();
    pontosPartidaHM.clear();
    pontosChegadaHM.clear();
    pontosPartidaVista2();
    pontosChegadaVista2();

    console.log(pontosPartidaHM);
    console.log(pontosChegadaHM);
    
    for (var i = 0; i < linhasHM.size; i++) {
        teste.source.data.features.push(linhasHM.get(i).linha);
    }

    map.addLayer(teste);

}

<<<<<<< HEAD
function preparaLayer(){
=======
function desenhaLinhas() {
>>>>>>> 78523226cf72b4b834c34baa99497fd36ffd570b

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

<<<<<<< HEAD
function preencheViagensMap(){
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

=======
    linhasHM.clear();
    linhasMap();

    for (var i = 0; i < linhasHM.size; i++) {
        teste.source.data.features.push(linhasHM.get(i).linha);
   }

   map.addLayer(teste);

}

function preencheViagensMap(){
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

>>>>>>> 78523226cf72b4b834c34baa99497fd36ffd570b
function adicionaLatLongViagensMap(){
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
<<<<<<< HEAD
        }
    }
}

function linhasMapVista2(){
    for (var i = 0; i < viagensHM.size; i++) {
        var entrou = false;
        var pPartida = [viagensHM.get(i).longPartida, viagensHM.get(i).latPartida];
        var pChegada = [viagensHM.get(i).longChegada, viagensHM.get(i).latChegada];
        if (viagensHM.get(i).ano >= ano_inicial && viagensHM.get(i).ano <= ano_final) {
            if(linhasHM.size > 0){
                var j = 0;
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
                linhasHM.set(0, new Linha(0, pPartida, pChegada));
            }
=======
>>>>>>> 78523226cf72b4b834c34baa99497fd36ffd570b
        }
    }
}

<<<<<<< HEAD
function pontosPartidaVista2(){
    for (var i = 0; i < viagensHM.size; i++) {

        var entrou = false;

        var rPartida = viagensHM.get(i).regPartida;

        var pPartida = [viagensHM.get(i).longPartida, viagensHM.get(i).latPartida];

        var emb = viagensHM.get(i).embarcados;

        if (viagensHM.get(i).ano >= ano_inicial && viagensHM.get(i).ano <= ano_final) {

            if(pontosPartidaHM.size > 0){
                var j = 0;
                while(!entrou){
                    if(rPartida == pontosPartidaHM.get(j).nome){
                        pontosPartidaHM.get(j).embarcados += emb;
                        pontosPartidaHM.get(j).viagens += 1;
                        entrou = true;
                        break;
                    }
                    if(j == pontosPartidaHM.size - 1 && !entrou){
                        pontosPartidaHM.set(pontosPartidaHM.size, new Ponto(pontosPartidaHM.size, rPartida, pPartida, emb, 0));
=======
function linhasMap(){
    for (var i = 0; i < viagensHM.size; i++) {
        var entrou = false;
        var pPartida = [viagensHM.get(i).longPartida, viagensHM.get(i).latPartida];
        var pChegada = [viagensHM.get(i).longChegada, viagensHM.get(i).latChegada];
        if (viagensHM.get(i).ano >= ano_inicial && viagensHM.get(i).ano <= ano_final) {
            if(linhasHM.size > 0){
                var j = 0;
                while(!entrou){
                    if (pPartida[0] == linhasHM.get(j).pPartida[0] && pPartida[1] == linhasHM.get(j).pPartida[1] && pChegada[0] == linhasHM.get(j).pChegada[0] && pChegada[1] == linhasHM.get(j).pChegada[1]){
                        linhasHM.get(j).ocurrencias += 1;
                        linhasHM.get(j).actualiza();
                        entrou = true;
                        break;
                    }
                    if(j == linhasHM.size - 1 && !entrou){
                        linhasHM.set(linhasHM.size, new Linha(linhasHM.size, pPartida, pChegada));
>>>>>>> 78523226cf72b4b834c34baa99497fd36ffd570b
                        entrou = true;
                        break;
                    }
                    j++;
                }
            } else {
<<<<<<< HEAD
                pontosPartidaHM.set(0, new Ponto(0, rPartida, pPartida, emb, 0));
            }

=======
                linhasHM.set(0, new Linha(0, pPartida, pChegada));
            }
>>>>>>> 78523226cf72b4b834c34baa99497fd36ffd570b
        }
    }
}

<<<<<<< HEAD
function pontosChegadaVista2(){
    for (var i = 0; i < viagensHM.size; i++) {

        var entrou = false;

        var rChegada = viagensHM.get(i).regChegada;

        var pChegada = [viagensHM.get(i).longChegada, viagensHM.get(i).latChegada];

        var des = viagensHM.get(i).desembarcados;

        if (viagensHM.get(i).ano >= ano_inicial && viagensHM.get(i).ano <= ano_final) {

            if(pontosChegadaHM.size > 0){
                var j = 0;
                while(!entrou){
                    if(rChegada == pontosChegadaHM.get(j).nome){
                        pontosChegadaHM.get(j).desembarcados += des;
                        pontosChegadaHM.get(j).viagens += 1;
                        entrou = true;
                        break;
                    }
                    if(j == pontosChegadaHM.size - 1 && !entrou){
                        pontosChegadaHM.set(pontosChegadaHM.size, new Ponto(pontosChegadaHM.size, rChegada, pChegada, 0, des));
                        entrou = true;
                        break;
                    }
                    j++;
                }
            } else {
                pontosChegadaHM.set(0, new Ponto(0, rChegada, pChegada, 0, des));
            }
        }
    }
}
=======

>>>>>>> 78523226cf72b4b834c34baa99497fd36ffd570b
