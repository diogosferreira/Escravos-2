/*INICIALIZAÇAO DO MAPA*/

var content;


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
        center: [-8.426084518432617, 40.20739355701786],
        zoom: 4,
        maxZoom: 16.1,
        //minZoom: 8,
        //maxBounds: bounds, // Sets bounds as max
        //preserveDrawingBuffer: true

    });


    /*LOAD JEOJSON DATA*/


    var locais = {
        type: 'FeatureCollection',
        features: [{
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.432578, 40.211312]
                },
                properties: {
                    title: 'Marciano',
                    category: 'materiais'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.425591, 40.204640]
                },
                properties: {
                    title: 'FBA',
                    category: 'empresa_map'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.426501, 40.213426]
                },
                properties: {
                    title: 'Burocratik',
                    /*description: 'Ssome',*/
                    category: 'empresa_map'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.414568, 40.192072]
                },
                properties: {
                    title: 'Whitesmith',
                    /*description: 'Ssome',*/
                    category: 'empresa_map'
                }
  },
            {
                //MARKER — Deemaze
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.420668, 40.206588]
                },
                properties: {
                    title: 'Deemaze',
                    /*description: 'Ssome',*/
                    category: 'empresa_map'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.432907, 40.195667]
                },
                properties: {
                    title: 'mialo',
                    /*description: 'Ssome',*/
                    category: 'empresa_map'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.401218, 40.203470]
                },
                properties: {
                    title: 'studioPrint',
                    /*description: 'Ssome',*/
                    category: 'impressao'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.401528, 40.210232]
                },
                properties: {
                    title: 'Ogami',
                    /*description: 'Ssome',*/
                    category: 'impressao'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.406180, 40.192823]
                },
                properties: {
                    title: 'MauMaria',
                    /*description: 'Ssome',*/
                    category: 'empresa_map'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.4343, 40.219453]
                },
                properties: {
                    title: 'Pantone4',
                    /*description: 'Ssome',*/
                    category: 'materiais'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.4310, 40.219719]
                },
                properties: {
                    title: 'DualPrint',
                    /*description: 'Ssome',*/
                    category: 'materiais'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.427147, 40.212311]
                },
                properties: {
                    title: 'Damasceno',
                    /*description: 'Ssome',*/
                    category: 'impressao'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.42, 40.212]
                },
                properties: {
                    title: 'ui-ux',
                    /*description: 'Ssome',*/
                    category: 'estagio'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.411879539489746, 40.18985666689439]
                },
                properties: {
                    title: 'Design',
                    /*description: 'Ssome',*/
                    category: 'estagio'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.418059349060059, 40.1963147035562]
                },
                properties: {
                    title: 'DesignGrafico',
                    /*description: 'Ssome',*/
                    category: 'estagio'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.42977523803711, 40.226007197520055]
                },
                properties: {
                    title: 'Fig',
                    /*description: 'Ssome',*/
                    category: 'impressao'
                }
  },
            {
                //MARKER
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-8.445353507995605, 40.20385376516079]
                },
                properties: {
                    title: 'LitoCoimbra',
                    /*description: 'Ssome',*/
                    category: 'impressao'
                }
  }


                  ]
    };



    /*————————————————————————*/
    /*DETETAR CLIQUE CATEGORIA*/

    $('.categorias_empresas li').on('click', function () {

        var categoria_escolhida = $(this).html().toLowerCase();
        //REMOVE ACENTOS
        var categoria_escolhida_final = categoria_escolhida.replace(/[áàâã]/g, 'a').replace(/[éèê]/g, 'e').replace(/[óòôõ]/g, 'o').replace(/[úùû]/g, 'u');




        /*FUNCAO PARA ADICIONAR EMPRESA ESCOLHIDA*/

        /*ADD MARKERS TO THE MAP*/

        // add markers to map
        locais.features.forEach(function (marker, i) {


            console.log(categoria_escolhida_final + " :::categoria dinal");
            console.log(locais.features[i].properties.category + " :::ATUAL");



            var local_atual = locais.features[i].properties.category;
            var local_final = local_atual.replace("_map", "s");

            console.log(local_final + " ::::------");


            if (categoria_escolhida_final == local_final || categoria_escolhida_final == "todas as categorias") {
                var nome__e = locais.features[i].properties.title;
                $("." + nome__e).show();


            }

            if (categoria_escolhida_final == "remover todas") {

                mostrar.empresa[i].mostrado = "false";
                $(".marker").hide();
            }

        });

    });





    /*—————————————————————————————————*/
    /*DETETAR CLIQUE EMPRESA INDIVIDUAL*/
    $('.empresas_individuais li').on('click', function () {
        var empresa_escolhida = $(this).html();
        //REMOVE ACENTOS
        var empresa_escolhida_final = empresa_escolhida.replace(/[áàâã]/g, 'a').replace(/[éèê]/g, 'e').replace(/[óòôõ]/g, 'o').replace(/[úùû]/g, 'u').replace(/\s/g, '');

        console.log(empresa_escolhida_final + " — carregou nesta empresa");


        /*FUNCAO PARA ADICIONAR EMPRESA ESCOLHIDA*/

        /*ADD MARKERS TO THE MAP*/


        // add markers to map
        locais.features.forEach(function (marker, i) {
            console.log("EMPRESA ESTA: " + mostrar.empresa[i].mostrado);

            if (empresa_escolhida_final == locais.features[i].properties.title) {

                if (mostrar.empresa[i].mostrado == "false") {


                    $("." + empresa_escolhida_final).show();

                }
            }
        });

    });





    /*ADD ADICIONAR MARKERS TODOS NO INICO*/

    // add markers to map
    locais.features.forEach(function (marker, i) {

        var categoria_empresa = locais.features[i].properties.category;
        var nome_empresa = locais.features[i].properties.title;

        /*CRIAR DIV DA EMPRESA*/
        var el = document.createElement('div');

        /*DAR CLASS*/
        el.className = categoria_empresa + " " + nome_empresa + " marker";



        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });


    $(".marker").append("<div class='border-nice'> </div>");


    /*ADICINAR TEXTO*/
    locais.features.forEach(function (marker, i) {

        var categoria_empresa = locais.features[i].properties.category;
        var nome_empresa = locais.features[i].properties.title;

        console.log("nome empresa = " + nome_empresa);
        console.log("categoria  = " + categoria_empresa);



        /*ADICINAR NOME DE EMPRESA A SUA DIV*/
        $("<p class='marker_nome_empresa'>" + nome_empresa + "</p>").appendTo("." + nome_empresa);

    });




    map.on('load', repositionMarkers);



    function repositionMarkers() {
        $(".marker").each(function (i, marker) {

            var currentZoom = map.getZoom();
            var mexe_zoom = currentZoom / 2;



            var wd = $(marker).width() / 2;
            var ht = 30;

            /*console.log(wd);*/

            var tmp = $(marker).css("transform").replace(')', '');
            if (tmp !== undefined) {
                var tokens = tmp.split(',');

                var newCoordX = tokens[4] - wd;
                var newCoordY = tokens[5] - ht;

                //console.log(newCoordY + " newCoordY");

                /*PARA MOVER COM ZOOM*/
                var calcu = (currentZoom - 14.02) * 15;
                newCoordY = newCoordY - calcu;



                $(marker).css({
                    "transform": "translate(" + newCoordX + "px" + ", " + newCoordY + "px" + ")"
                });
            }
        });
    }


    /*MANTEM NO ZOOM*/
    /* map.on('zoom', repositionMarkers);*/

    /*QUANDO SE PARA O ZOOM*/
    map.on('move', repositionMarkers);
    map.on('moveend', repositionMarkers);



    map.on('zoomend', function () {
        //console.log("bruuuummm");
        repositionMarkers();
    });



    /*REMOVER MARKER COM CLICK*/
    $('.marker').on('click', function () {
        $(this).hide();


        var classss = this.className;
        var index = classss.split(" ");
        var index_final = index[1];


        /*        $("." + index_final).hide();*/

        console.log("nome_empresa ::: " + index_final);


        locais.features.forEach(function (marker, i) {


            if (index_final == locais.features[i].properties.title) {

                if (mostrar.empresa[i].mostrado == "true") {
                    var nome_empresa = locais.features[i].properties.title;
                    mostrar.empresa[i].mostrado = "false";
                }

            }

        });


    });

});
