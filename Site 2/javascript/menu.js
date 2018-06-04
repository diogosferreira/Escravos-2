var classe_pesquisa;
var classe_anima_cima;

var classe_menu;
var classe_anima_esquerda;


//ESCONDER MENU
//$('.menu').hide();
//$('.whiteSpace').hide();
$('.menu_container').hide();
$('.under_menu').hide();
//
$('.input_pesquisa').hide();
$('.pesquisa_container').hide();



/*MOSTRAR E ESCONDER TECLA ESC*/
$('.show_esc').on('mouseover', function (event) {
    $(".escape").fadeIn(300);
});

$('.show_esc').on('mouseout', function (event) {
    $(".escape").fadeOut(300);
});

/*MENU*/
$('.show_esc_menu').on('mouseover', function (event) {
    $(".escape_menu").fadeIn(300);
});

$('.show_esc_menu').on('mouseout', function (event) {
    $(".escape_menu").fadeOut(300);
});


/*REMOVER MENU E PESQUISA AO CLICAR NO ESCAPE*/
$(document).keyup(function (e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        console.log("ganda teclada");
        
        /*volta a scrool*/
    $("body").css("overflow", "scroll");

        classe_pesquisa = $(".pesquisa_container").attr('class');
        console.log(classe_pesquisa);
        classe_anima_cima = "slideInDown";

        if (classe_pesquisa.indexOf(classe_anima_cima) != -1) {
            console.log(classe_anima_cima + " found");
            $(".pesquisa_icon_container").find('img').toggle();
            /*REMOVER PESQUISA*/
            $(".pesquisa_container").addClass("slideOutUp");
            $(".pesquisa_container").removeClass("slideInDown");
        }

        classe_menu = $(".menu_container").attr('class');
        console.log(classe_menu);
        classe_anima_esquerda = "slideInLeft";

        if (classe_menu.indexOf(classe_anima_esquerda) != -1) {
            console.log(classe_anima_esquerda + " found");
            $(".menu_icon_container").find('img').toggle();
            /*REMOVER MENU*/
            $(".menu_container").addClass("slideOutLeft");
            $(".menu_container").removeClass("slideInLeft");
            $(".under_menu").fadeOut(700);

            setTimeout(function () {
                $(".menu_container").hide();
            }, 690);
        }
    }
});




// MOSTRAR / ESCONDER MENU
$('.toggleiro').click(function () {
    
    /*Previne scrool*/
    $("body").css("overflow", "hidden");
    
    
    $(".menu_icon_container").find('img').toggle();
    //$('.menu').toggle();
    //$('.whiteSpace').toggle();
    //$('.menu_container').toggle();
    //$('.input_pesquisa').toggle();
    $(".menu_container").show();


    /*FECHAR O MENU DEPOIS DE ELE ESTAR ABERTO*/
    classe_pesquisa = $(".pesquisa_container").attr('class');
    console.log(classe_pesquisa);
    classe_anima_cima = "slideInDown";

    /*QUANDO A PESQUISA ESTA PARA BAIXO*/
    if (classe_pesquisa.indexOf(classe_anima_cima) != -1) {
        console.log(classe_anima_cima + " found");
        $(".pesquisa_icon_container").find('img').toggle();
        /*REMOVER PESQUISA*/
        $(".pesquisa_container").addClass("slideOutUp");
        $(".pesquisa_container").removeClass("slideInDown");
    }

    /*ANIMAÇÃO NORMAL*/
    $(".menu_container").addClass("slideInLeft");
    $(".menu_container").removeClass("slideOutLeft");
    $(".under_menu").fadeIn(900);
});




$('.close_menu').click(function () {
    /*volta a scrool*/
    $("body").css("overflow", "scroll");
    
    
    $(".menu_container").addClass("slideOutLeft");
    $(".menu_container").removeClass("slideInLeft");
    $(".under_menu").fadeOut(700);

    setTimeout(function () {
        $(".menu_container").hide();
    }, 690);
});



// SUBMIT INPUT COM ENTER
$("input").keypress(function (event) {
    if (event.which == 13) {
        event.preventDefault();
        //$("form").submit();
        var valor = $(".pesquisa_label").val();
    }
});


// SELECIONAR INPUT SEM CLIQUE 
$('.search_icon').click(function () {
    
    /*volta a scrool*/
    $("body").css("overflow", "scroll");
    
    
    $('.pesquisa_container').show();
    $(".input_pesquisa").show();

    /*FECHAR O MENU DEPOIS DE ELE ESTAR ABERTO*/
    classe_menu = $(".menu_container").attr('class');
    console.log(classe_menu);
    classe_anima_esquerda = "slideInLeft";

    /*QUANDO A PESQUISA ESTA PARA BAIXO*/
    if (classe_menu.indexOf(classe_anima_esquerda) != -1) {
        console.log(classe_anima_esquerda + " found");
        $(".menu_icon_container").find('img').toggle();
        /*REMOVER MENU*/
        $(".menu_container").addClass("slideOutLeft");
        $(".menu_container").removeClass("slideInLeft");
        $(".under_menu").fadeOut(700);

        setTimeout(function () {
            $(".menu_container").hide();
        }, 690);
    }


    $(".pesquisa_icon_container").find('img').toggle();

    $(".pesquisa_container").addClass("slideInDown");
    $(".pesquisa_container").removeClass("slideOutUp");

    /*MOSTRAR CURSOR*/
    $(".pesquisa_label").focus();
});

// REMOVER COM ANIMAÇÃO
$('.close_icon').click(function () {
    $(".pesquisa_container").removeClass("slideInDown");
    $(".pesquisa_container").addClass("slideOutUp");
});
