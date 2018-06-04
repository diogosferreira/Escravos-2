var ano_inicial = 1566;
var ano_final = 1866;

var slider;



//SLIDER NOVO
slider = document.getElementById('sliderEspetacular');


noUiSlider.create(slider, {
    start: [1566, 1866],
    behaviour: 'drag-tap',
    connect: true,
    tooltips: [true, true],
    range: {
        'min': 1566,
        'max': 1866
    },
    format: {
        to: function (value) {
            return parseInt(value);
        },
        from: function (value) {
            return parseInt(value);
        }
    }
});



slider.noUiSlider.on('slide', function (values) {
    ano_inicial = slider.noUiSlider.get()[0];
    ano_final = slider.noUiSlider.get()[1];


    
    switch (vista) {
        case 1:
            desenhaVista1();
            break;
        case 2:
            desenhaVista2();
            break;
        default:
            console.log("Houston, we have a problem. Switch -> Slider");
    }
    //console.log(start);
    //console.log(end);
});









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

    switch (vista) {
        case 1:
            desenhaVista1();
            break;
        case 2:
            desenhaVista2();
            break;
        default:
            console.log("Houston, we have a problem. Switch -> Slider");
    }
});
