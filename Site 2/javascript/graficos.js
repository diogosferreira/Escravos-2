$(document).ready(function () {

    //RODAR SETA GRAFICO 1
    $('.grafico_1').click(function () {
        $(".seta").toggleClass("seta_rodada");

        $(".div_grafico_1").toggle();
        desenhaGrafico1();

    });
    
    
    //RODAR SETA GRAFICO 1
    $('.grafico_2').click(function () {
        $(".seta2").toggleClass("seta_rodada");

        $(".div_grafico_2").toggle();
        desenhaGrafico1();

    });
    
    

    // $(".div_grafico_1").show();









    //GRAFICO 1
    function desenhaGrafico1() {

        var ctx = document.getElementById("myChart").getContext('2d');
        Chart.defaults.line.spanGaps = true;


        var myColors = ['red', 'green', 'blue'];

        var visitData = ['red'];


        var myLineChart = new Chart(ctx, {
            type: 'line',
            labels: visitData,
            data: {
                datasets: [{
                        label: 'Portugal',
                        data: [10, 20, 30, 40],
                        fill: false,
                        borderColor: "#00ff00",
                        labelString: "CENAS"
            },
                    {
                        label: 'Espanha',
                        data: [30, 40, 20, 10],
                        fill: false,
                        borderColor: "#ffff00",
                        labelString: "CENAS"
            }

            ],

                labels: ['1566', '1666', '1766', '1866']
            },



            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            min: '1566'
                        }
                }]
                },


                legend: {
                    fontColor: 'black',
                    onClick: (e) => e.stopPropagation(),
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                    }
                },
            }
        });

    }


});
