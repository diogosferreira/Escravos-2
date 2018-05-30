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


    //trips.cada.forEach(function (marker, i) {
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
        // });
    }
    //});
    console.log("FIM");

});
