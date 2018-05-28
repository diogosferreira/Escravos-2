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
        
        desenhaLinhas();

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



    //MAPA
});






function desenhaLinhas() {

    if(idLayer>0)
    map.removeLayer(idLayer);
    
    idLayer++;

    teste = {
        'id': String(idLayer),
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [{
                    'type': 'Feature',
                    'properties': {
                        //'color': '#F7455D' // red
                    }
                }]
            }
        },
        'paint': {
            'line-width': ['get', 'line-width'],
            'line-opacity': ['get', 'line-opacity'],
            'line-color': ['get', 'color']
        }
    }


    viagens.cada.forEach(function (marker, i) {


        //var id = String(viagens.cada[i].voyageid);
        var id = String(i);
        //console.log(id);


        var regiaoPartida = trips.cada[i].regiao_compra;

        var regiaoChegada = trips.cada[i].regiao_chegada;


        //ANOS
        var partida = trips.cada[i].ano;
        var dataPartida = partida.substr(0, partida.indexOf('-'));


        var comprimento = dataPartida.length;


        //console.log(dataPartida);


        //var chegada = viagens.cada[i].date_end;
        //var dataChegada = chegada.substr(0, chegada.indexOf('-'));




        //TESTA SE AS LINHAS ESTAO NO SLIDER
        if (dataPartida >= ano_inicial && dataPartida <= ano_final || comprimento == 0) {


            //VAI BUSCAR REGIOES
            regiao.cada.forEach(function (marker, i) {
                if (regiaoPartida == regiao.cada[i].region) {
                    partidaLat = regiao.cada[i].lat;
                    partidaLng = regiao.cada[i].long;

                }

                if (regiaoChegada == regiao.cada[i].region) {
                    chegadaLat = regiao.cada[i].lat;
                    chegadaLng = regiao.cada[i].long;
                }
            });






            //CORES DAS LINHAS
            if (i % 2 == 0) {
                color = '#ff0000';
            }

            if (i % 2 == 1) {
                color = '#4155eb';
            }

            var stroke = .2;






            //ADICIONAR LINHAS
            teste.source.data.features[i] = {
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
            };




            //FECHA IF DO SLIDER
        }



    });









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
