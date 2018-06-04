$(document).ready(function () {



    desenhaMortes();




    slider.noUiSlider.on('slide', function (values) {
        ano_inicial = slider.noUiSlider.get()[0];
        ano_final = slider.noUiSlider.get()[1];

        desenhaMortes();
    });






    function desenhaMortes() {

        //GRAFICO 1

        var labelsAnos = [];
        var percentagemMortes = [];
        var incremento = 0;


        var soma = 0;

        var soma1 = 0;

        console.log(percentagemMortes);

        for (var i = 1566; i <= 1866; i++) {
            incremento = 1;

            if (i >= ano_inicial && i <= ano_final) {
                labelsAnos.push(i - 1 + incremento);
                soma++;

            }
        }



        console.log(soma + "    labelsAnos ");


        //PERCENTAGEM
        var totalEmb = 0;
        var totalDes = 0;
        var percentagemMortesNum = 0;

        for (var i = 1566; i <= 1866; i++) {

            if (i >= ano_inicial && i <= ano_final) {

                for (var k = 0; k < viagensHM.size; k++) {

                    if (viagensHM.get(k).ano == i) {
                        totalEmb += viagensHM.get(k).embarcados;
                        totalDes += viagensHM.get(k).desembarcados;
                    }
                }
                soma1++;


                percentagemMortesNum = parseInt(100 - ((totalDes * 100) / totalEmb));
                percentagemMortes.push(percentagemMortesNum);
                totalEmb = 0;
                totalDes = 0;
            }

        }




        console.log(soma1 + "    valores ");
        //console.log(percentagemMortes);









        var ctx = document.getElementById("myChart").getContext('2d');
        Chart.defaults.line.spanGaps = true;




        var myColors = ['red', 'green', 'blue'];

        var visitData = ['red'];


        var myLineChart = new Chart(ctx, {
            type: 'line',
            labels: visitData,
            data: {
                datasets: [{
                        label: '% de Mortes por ano',
                        pointStyle: 'line',
                        data: percentagemMortes,
                        fill: false,
                        borderColor: "#FF0000",
                        labelString: "CENAS",
                        borderWidth: 1
            }
                /*,
                                {
                                    label: 'Espanha',
                                    data: [30, 40, 20, 10],
                                    fill: false,
                                    borderColor: "#ffff00",
                                    labelString: "CENAS"
                            }*/

            ],

                labels: labelsAnos
            },



            options: {
                animation: false,
                elements: {
                    point: {
                        radius: 0
                    }
                },
                tooltips: {
                    //enabled: false,
                    mode: 'single'
                },
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
                showTooltips: false
            }
        });



        Chart.Tooltip.positioners.custom = function (elements, eventPosition) {
            /** @type {Chart.Tooltip} */
            var tooltip = this;

            /* ... */

            return {
                x: 0,
                y: 0
            };
        }




    };


});
