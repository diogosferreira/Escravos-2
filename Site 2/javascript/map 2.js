/*INICIALIZAÇAO DO MAPA*/

var content;

var map;
var teste;

var idLayer = 0;

var ate = 0;

const viagensHM = new Map();
const linhasHM = new Map();

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






function desenhaLinhas() {

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
        }
    }
}

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


