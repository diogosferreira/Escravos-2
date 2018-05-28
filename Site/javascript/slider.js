var miradouro;
var ano_inicial = 1566;
var ano_final = 1866;

//INICIALIZAR
$(function () {
    $(".slider-range").slider({
        range: true,
        min: 1566,
        max: 1866,
        values: [1566, 1866], //valores iniciais
        slide: function (event, ui) {
            $("#amount-anos").val(ui.values[0] + " - " + ui.values[1]);
        }
    });

    //IMPRIMIR OS VALORES INICIAIS
    $("#amount-anos").val($(".slider-range").slider("values", 0) +
        " — " + $(".slider-range").slider("values", 1));
});


/*DETETAR SLIDE*/
$('.slider-range').on('slide', function (event, ui) {
    var x = $(".slider-range").slider("values", 1);

    //console.log(x + "VALOR");

    $('.slider1 .ui-slider-handle').text(x);

    /*IR BUSCAR VALOR DOS SLDIERS*/
    ano_inicial = $(".slider-range").slider("values", 0);
    ano_final = $(".slider-range").slider("values", 1);

    

    //console.log(ano_inicial + " i " + ano_final + "   f");
    
    //map.removeLayer(idLayer);
    
    //delete teste;
    
    desenhaLinhas(ano_inicial);
});
