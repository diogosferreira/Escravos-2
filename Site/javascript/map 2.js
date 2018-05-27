/*INICIALIZAÇAO DO MAPA*/

var content;


var partidaLat = 0;
var partidaLng = 0;

var chegadaLat = 0;
var chegadaLng = 0;

var ate = 0;


//var cor = '#33C9EB';


$(document).ready(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGlvZ29mZXJyZWlyYTM3IiwiYSI6ImNqOWZiMTR4OTJqM3MyeW53YzN6aGJkZjMifQ.4uRgggZMty_qeQhE8xxckA';




    var mostrar = {
        empresa: [{
                //MARKER
                nome: "Marciano",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "FBA",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "Burocratik",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "Whitesmith",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "Deemaze",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "mialo",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "studioPrint",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "Ogami",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "MauMaria",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "Pantone4",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "DualPrint",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "Damasceno",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "ui-ux",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "Design",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "DesignGrafico",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "Fig",
                mostrado: "true"
  },
            {
                //MARKER
                nome: "LitoCoimbra",
                mostrado: "true"
  }
                 ]
    };

    var geral = 1;

    mostrar.empresa[1].nome = "AGORA NÂO ";

    ///console.log(mostrar.empresa[1].nome + "DEUUU");


    // Set bounds
    var bounds = [
    [-8.475893, 40.161866], // Southwest coordinates
    [-8.352639, 40.246272] // Northeast coordinates
];


    var map = new mapboxgl.Map({
        container: 'map',
        //style: 'mapbox://styles/diogoferreira37/cjaoaqxke2sj32rrvbeyzffl2',
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-8.426084518432617, 40.20739355701786],
        zoom: 0,
        maxZoom: 16.1,
        //minZoom: 8,
        //maxBounds: bounds, // Sets bounds as max
        //preserveDrawingBuffer: true

    });




    map.on('load', function () {


        var teste;


        teste = {
            'id': 'lines',
            'type': 'line',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'properties': {
                            //'color': '#F7455D' // red
                        },
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                            [0, 0],
                            [0, 0]
                        ]
                        }
                }]
                }
            },
            'paint': {
                'line-width': 1,
                'line-opacity': .05,
                // Use a get expression (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
                // to set the line-color to a feature property value.
                'line-color': ['get', 'color']
            }
        }




        viagens.cada.forEach(function (marker, i) {


            //var id = String(viagens.cada[i].voyageid);
            var id = String(i);
            //console.log(id);


            var regiaoPartida = viagens.cada[i].majbyimp;

            var regiaoChegada = viagens.cada[i].mjselimp;

            ///console.log(regiaoPartida + " -- partida");
            ///console.log(regiaoChegada + " -- chegada");


            regiao.cada.forEach(function (marker, i) {

                if (regiaoPartida == regiao.cada[i].region) {
                    partidaLat = regiao.cada[i].lat;
                    partidaLng = regiao.cada[i].long;

                    //console.log(regiaoPartida + " " + );
                }

                if (regiaoChegada == regiao.cada[i].region) {
                    chegadaLat = regiao.cada[i].lat;
                    chegadaLng = regiao.cada[i].long;
                }
            });






            // console.log(partidaLat + " partida");
            //console.log(partidaLng + " partida LNG");


            //    console.log(chegadaLat + " chegada");
            //  console.log(chegadaLng + " chegada LNG");






            //if(partidaLat)



            //ADICIONAR LINHAS
            teste.source.data.features[i] = {
                'id': 'testa',
                'type': 'Feature',
                'properties': {
                    'color': '#ff0000', // blue
                    'id': id,
                    "description": id
                },
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                            [partidaLng, partidaLat],
                            [chegadaLng, chegadaLat]
                        ]
                }
            };


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



        /*  ----->
            ----->
            ----->
----->        //https://www.mapbox.com/mapbox-gl-js/example/popup-on-click/
*/



        //map.on('click', 'lines', function (e) {
        map.on('mouseenter', 'lines', function (e) {
            //var features = map.queryRenderedFeatures(e.point);
            //console.log(JSON.stringify(features, null, 1));


            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;




            console.log(coordinates);
            console.log(description);




            popup = new mapboxgl.Popup({
                    closeOnClick: true
                })
                .setLngLat(e.lngLat)
                .setHTML('<h1>Hello World!</h1>')
                .addTo(map);


            //document.getElementById('features').innerHTML = JSON.stringify(features, null, 2);
        });



        map.on('mouseleave', 'lines', function () {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });



        /*map.on("mousemove", "testa", function (e) {
            console.log("EM cima dela");
        });*/



        /* addlayer.source.data.features.push( addlayer
             , {
             'type': 'Feature',
             'properties': {
                 'color': '#33C9EB' // blue
             },
             'geometry': {
                 'type': 'LineString',
                 'coordinates': [
                             [-122.433, 37.829016],
                             [-120.48393028974533, 30.829471820141016]
                         ]
             }
         });*/



        //console.log(partidaLat + " - LAT");



        //For each
    });









    //DETETAR HOVER NA LAYER
    //map.on("mouseover", id, function () {    });








    //map.on('load', repositionMarkers);

    /*

        function repositionMarkers() {
            $(".marker").each(function (i, marker) {

                var currentZoom = map.getZoom();
                var mexe_zoom = currentZoom / 2;



                var wd = $(marker).width() / 2;
                var ht = 30;

              

                var tmp = $(marker).css("transform").replace(')', '');
                if (tmp !== undefined) {
                    var tokens = tmp.split(',');

                    var newCoordX = tokens[4] - wd;
                    var newCoordY = tokens[5] - ht;

                   

                   //mover com o zoom
                    var calcu = (currentZoom - 14.02) * 15;
                    newCoordY = newCoordY - calcu;



                    $(marker).css({
                        "transform": "translate(" + newCoordX + "px" + ", " + newCoordY + "px" + ")"
                    });
                }
            });
        }
        
        */


    /*MANTEM NO ZOOM*/
    /* map.on('zoom', repositionMarkers);*/

    /*QUANDO SE PARA O ZOOM*/
    //map.on('move', repositionMarkers);
    //map.on('moveend', repositionMarkers);




    /* map.on('zoomend', function () {
         repositionMarkers();
     });*/


    //MAPA
});
