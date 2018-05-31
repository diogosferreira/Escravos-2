/*INICIALIZAÇAO DO MAPA*/

var content;

var map;
var teste;

var idLayer = 0;

var partidaLat = 0;
var partidaLng = 0;

var chegadaLat = 0;
var chegadaLng = 0;

var ate = 0;



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

        //desenhaLinhas();

       
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
        //zoom = map.getZoom();
        //console.log(zoom + "   zoom");
        //desenhaPontos();
    });

    //MAPA
});






function desenhaLinhas(anoInicialSlider) {

    teste = {
        'id': 'linhas',
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

    //viagens.cada.forEach(function (marker, i) {

    for (var i = 0; i < viagens.cada.length; i++) {


        //var id = String(viagens.cada[i].voyageid);
        var id = trips.cada[i].id;
        //console.log(id);


        var regiaoPartida = trips.cada[i].regiao_compra;

        var regiaoChegada = trips.cada[i].regiao_chegada;


        //ANOS
        var partida = trips.cada[i].ano;
        var dataPartida = parseInt(partida.substr(0, partida.indexOf('-')));




        //console.log(ano_inicial + " i " + ano_final + "   f");


        //TESTA SE AS LINHAS ESTAO NO SLIDER
        //if (dataPartida >= ano_inicial) {


        //console.log("partida   " + dataPartida);
        //console.log("inicial   " + ano_inicial);
        //console.log("final   " + ano_final);

        //VAI BUSCAR REGIOES

        for (var l = 0; l < regiao.cada.length; l++) {

            //regiao.cada.forEach(function (marker, l) {
            if (regiaoPartida == regiao.cada[l].region) {
                partidaLat = regiao.cada[l].lat;
                partidaLng = regiao.cada[l].long;

                //console.log(regiaoPartida + "  ... " + i);

            }

            if (regiaoChegada == regiao.cada[l].region) {
                chegadaLat = regiao.cada[l].lat;
                chegadaLng = regiao.cada[l].long;
            }

        }
        //});




        //CORES DAS LINHAS
        if (i % 2 == 0) {
            color = '#ff0000';
        }

        if (i % 2 == 1) {
            color = '#4155eb';
        }

        var stroke = .2;



        if (dataPartida >= ano_inicial) {
            //console.log(ano_inicial);

            //ADICIONAR LINHAS
            teste.source.data.features.push({
                'id': 'testa',
                'type': 'Feature',
                'properties': {
                    'color': color, // blue
                    'id': id,
                    "description": id,
                    'line-width': stroke,
                    'line-opacity': .05,
                },
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                            [partidaLng, partidaLat],
                            [chegadaLng, chegadaLat]
                        ]
                }
            });



            //FECHA IF DO SLIDER
        } else {
            //console.log(id + "   iDDDDD");

        }



    }
    //});





    //ADICIONAR LINHAS
    /*teste.source.data.features[1] = {
        'type': 'Feature',
        'properties': {
            'color': '#33C9EB' // blue
        },
        'geometry': {
            'type': 'LineString',
            'coordinates': [
                        [-122.433, 37.829016],
                        [0, 0]
                    ]
        }
    };*/

    ///console.log(teste.source.data.features[1]);


    map.addLayer(teste);

}
