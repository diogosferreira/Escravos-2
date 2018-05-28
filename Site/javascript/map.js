/*INICIALIZAÇAO DO MAPA*/

var content;


var partidaLat;
var partidaLng;

var chegadaLat;
var chrgadaLng;

var ate = 0;


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

    console.log(mostrar.empresa[1].nome + "DEUUU");


    // Set bounds
    var bounds = [
    [-8.475893, 40.161866], // Southwest coordinates
    [-8.352639, 40.246272] // Northeast coordinates
];


    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/diogoferreira37/cjaoaqxke2sj32rrvbeyzffl2',
        //style: 'mapbox://styles/mapbox/light-v9',
        center: [-6.837674, 41.165732],
        zoom: 8,
        maxZoom: 16.1,
        minZoom: 8,
        maxBounds: bounds, // Sets bounds as max
        //preserveDrawingBuffer: true

    });




    map.on('load', function () {

        viagens.cada.forEach(function (marker, i) {


            //var id = String(viagens.cada[i].voyageid);
            var id = String(i);
            //console.log(id);


            var regiaoPartida = viagens.cada[i].majbyimp;
            var regiaoChegada = viagens.cada[i].mjselimp;
            
            console.log(regiaoPartida + " -- partida");
            console.log(regiaoChegada + " -- chegada");


            regiao.cada.forEach(function (marker, i) {
                
                if (regiaoPartida == regiao.cada[i].region) {
                    partidaLat = regiao.cada[i].lat;
                    partidaLng = regiao.cada[i].long;
                    
                    //console.log(partidaLat);
                }

                if (regiaoChegada == regiao.cada[i].region) {
                    chegadaLat = regiao.cada[i].lat;
                    chegadaLng = regiao.cada[i].long;
                }
            });



            console.log(partidaLat + " partida");
            console.log(partidaLng + " partida LNG");
            
            
            //console.log(chegadaLat + " chegada");
            //console.log(chegadaLng + " chegada LNG");
            
            //console.log(" ---- ");
            
            
            if(chegadaLat == undefined) {
                chegadaLat = 0;
            }
            
            //if(chegadaLng == undefined) {
                chegadaLng = 0;
            //}

            //if(partidaLat)

            //—————————————
            //LINE
            var linhas = {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "properties": {},
                        "coordinates": [
                [partidaLat, partidaLng],
                [chegadaLat, chegadaLng],
            ]
                    }
    }]
            };


            
            
            
            
            //ADICONA AS LINHAS AO MAPA
            map.addLayer({
                "id": id,
                "type": "line",
                "source": {
                    "type": "geojson",
                    "data": linhas
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#BF93E4",
                    "line-width": 2,
                    'line-opacity': .3
                }
            });
        });

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
