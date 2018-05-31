//PONTOS TESTE

pontosTeste = {
    'id': 'pontos',
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




linhasTeste = {
    'id': 'linhasss',
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


linhasTeste1 = {
    'id': 'linhasssqw',
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





linhasViagens = {
    'id': 'linhasssss',
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


/////——————————————————
/////——————————————————
/////——————————————————


var viagens_vista1 = {
    'features': []
}


//DAR VALOR INICIAL
viagens_vista1.features.push({
    //'ano': year,
    'regiao_partida': trips.cada[0].regiao_compra,
    'regiao_chegada': trips.cada[0].regiao_chegada,
    'num_partidas': trips.cada[0].embarcados,
    'num_chegadas': trips.cada[0].desembarcados,
});




$(document).ready(function () {



    map.on('load', function () {


        for (var i = 1; i < trips.cada.length; i++) {

            var parou = false;

            //DADOS NOVA LINHA

            //var year = trips.cada[i].ano;
            var regiao_p = trips.cada[i].regiao_compra;
            var regiao_c = trips.cada[i].regiao_chegada;

            var partidas = Number(trips.cada[i].embarcados);
            var chegadas = Number(trips.cada[i].desembarcados);


            //COMPARAR COM EXISTENTES
            for (var k = 0; k < viagens_vista1.features.length; k++) {

                //ANO JA EXISTE NO NOVO
                if (regiao_p == viagens_vista1.features[k].regiao_partida) {
                    if (regiao_c == viagens_vista1.features[k].regiao_chegada) {
                        //SOMA PARTIDA e CHEGADA
                        viagens_vista1.features[k].num_partidas = Number(viagens_vista1.features[k].num_partidas) + partidas;
                        viagens_vista1.features[k].num_chegadas += chegadas;
                        parou = true;
                    }
                } else if (k == viagens_vista1.features.length - 1 && parou == false) {
                    //ADICIONA NOVA LINHA
                    viagens_vista1.features.push({
                        //'ano': year,
                        'regiao_partida': regiao_p,
                        'regiao_chegada': regiao_c,
                        'num_partidas': partidas,
                        'num_chegadas': chegadas,
                    });
                }
            }
        }
        //});
        console.log("FIM");



        //
        var maiorLongGlobal = Number.MIN_SAFE_INTEGER;

        var maiorLatGlobal = Number.MIN_SAFE_INTEGER;
        var menorLatGlobal = Number.MAX_SAFE_INTEGER;

        var pontoMedioLat = 0;
        var pontoMedioLong = 0;

        var longComparar = 0;
        var latComparar = 0;

        var regiaoChegada;

        var latAtual;
        var longAtual;

        var partidaAtual;



        //
        var testeLongchegada;
        var testeLatchegada;

        var regiaoPartidaAnterior = "vánessa";


        // 1
        //CALCULO PONTO MAIS ALTO E MAIS BAIXO
        //for (var k = 0; k < viagens_vista1.features.length; k++) {
        for (var k = 0; k < 1; k++) {

            partidaAtual = viagens_vista1.features[k].regiao_partida;


            //var chegadaAtual = viagens_vista1.features[k].regiao_chegada;

            if (regiaoPartidaAnterior != partidaAtual) {

                for (var i = 0; i < viagens_vista1.features.length; i++) {

                    if (viagens_vista1.features[i].regiao_partida == partidaAtual) {

                        regiaoChegada = viagens_vista1.features[i].regiao_chegada;


                        //CORRE REGIOES PARA IR BUSCAR CORDENADAS
                        for (var l = 0; l < regiao.cada.length; l++) {
                            //REGIAO CHEGADA IGUAL REGIAO

                            if (regiao.cada[l].region == regiaoChegada) {

                                testeLongchegada = regiao.cada[l].lat;
                                testeLatchegada = regiao.cada[l].long;


                                latAtual = regiao.cada[l].lat;

                                longAtual = regiao.cada[l].long;


                                //LAT
                                if (latAtual >= maiorLatGlobal) {
                                    maiorLatGlobal = latAtual;
                                }

                                if (latAtual <= menorLatGlobal) {
                                    menorLatGlobal = latAtual;
                                }

                            }
                        }



                        //MAIOR LNG
                        for (var l = 0; l < regiao.cada.length; l++) {

                            if (regiao.cada[l].region == regiaoChegada && regiao.cada[l].region != partidaAtual) {
                                //LNG MAIOR
                                if (longAtual >= maiorLongGlobal) {
                                    maiorLongGlobal = longAtual;
                                }

                            }
                        }



                        //PONTO MEDIO
                        for (var l = 0; l < regiao.cada.length; l++) {
                            //PONTO DE PARTIDA
                            if (regiao.cada[l].region == partidaAtual) {
                                longComparar = regiao.cada[l].long;
                                latComparar = regiao.cada[l].lat;



                                //LONG
                                pontoMedioLong = (longComparar + maiorLongGlobal) / 2;
                            }
                        }





                        //calculo ponto médio

                        pontoMedioLat = (maiorLatGlobal + menorLatGlobal) / 2;

                        // pontoMedioLong = (maiorLongGlobal + longAtual) / 2;

                        //DESENHA PONTOS

                        pontosTeste.source.data.features.push({
                            'id': 'ponto',
                            'type': 'Feature',
                            'properties': {
                                'color': '#000000', // blue
                                'size': 5,
                                'id': "nome_ponto",
                                //"description": city.cidade,
                                "stroke-color": '#000ff0',
                                "stroke-size": 0
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [testeLatchegada, testeLongchegada]
                            }
                        });






                    }


                }
            }

            //ADICIONAR LINHA DESDE O PONTO INICIAL AO MEDIO
            linhasViagens.source.data.features.push({
                'id': 'tdasma.s,madasd.,a',
                'type': 'Feature',
                'properties': {
                    'color': "#eff000", // blue
                    //'id': "id",
                    //"description": "id",
                    'line-width': 30,
                    'line-opacity': 1,
                },
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                    [longComparar, latComparar],
                    [pontoMedioLong, pontoMedioLat]
                    ]
                }
            });






            //——————————————————————————————
            //LINHAS DESDE O PONTO MEDIO AOS FINAIS
            //for (var i = 0; i < viagens_vista1.features.length; i++) {
            for (var m = 0; m < viagens_vista1.features.length; m++) {


                //console.log(regiaoChegada + "  - - - ");
                //console.log(regiao.cada[m].region + "  ........");

                //REGIAO CHEGADA IGUAL REGIAO

                if (viagens_vista1.features[m].regiao_partida == partidaAtual) {
                    

                    var regiaoChegadaMiniLinha = viagens_vista1.features[m].regiao_chegada;


                    for (var y = 0; y < regiao.cada.length; y++) {

                        if (regiao.cada[y].region == regiaoChegadaMiniLinha) {
                            
                            console.log(" 3333");
                            var latMiniLinha = regiao.cada[y].lat;
                            var longMiniLinha = regiao.cada[y].long;
                        }

                    }


                    console.log(latMiniLinha + " .|.");


                    //ADICIONAR LINHAS VIAGNES
                    linhasViagens.source.data.features.push({
                        'id': 'tdasma.s,madasd.,a',
                        'type': 'Feature',
                        'properties': {
                            'color': "#0ff000", // blue
                            //'id': "id",
                            //"description": "id",
                            'line-width': 3,
                            'line-opacity': 1,
                        },
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                            [pontoMedioLong, pontoMedioLat],
                            [longMiniLinha, latMiniLinha],
                        ]
                        }
                    });

                }
            }









            regiaoPartidaAnterior = partidaAtual;
        }


        //ADICIONAR LINHAS
        linhasTeste1.source.data.features.push({
            'id': 'tdasma.s,mdasd.,a',
            'type': 'Feature',
            'properties': {
                'color': "#000000", // blue
                //'id': "id",
                //"description": "id",
                'line-width': 3,
                'line-opacity': 1,
            },
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                            [-20, pontoMedioLat],
                            [20, pontoMedioLat]
                        ]
            }
        });


        linhasTeste.source.data.features.push({
            'id': 'tdasma.s,mdasda.,a',
            'type': 'Feature',
            'properties': {
                'color': "#000000", // blue
                //'id': "id",
                //"description": "id",
                'line-width': 3,
                'line-opacity': 1,
            },
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                            [pontoMedioLong, 0],
                            [pontoMedioLong, 20]
                        ]
            }
        });

        
        
        map.addLayer(pontosTeste);
        map.addLayer(linhasTeste);
        map.addLayer(linhasTeste1);
        map.addLayer(linhasViagens);
        
    

        // MAP ON LOAD
    });

});
