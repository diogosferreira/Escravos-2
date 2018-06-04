var pontos;
var zoom = 2;

$(document).ready(function () {


    map.on('load', function () {
        desenhaPontos();
    });


    //map.on('click', 'lines', function (e) {
    map.on('mouseenter', 'pontos', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var id_ponto = e.features[0].properties.id;

        console.log("id ponto " + id_ponto);


        popup = new mapboxgl.Popup({
                closeOnClick: true
            })
            .setLngLat(e.lngLat)
            //.setHTML(e.features[0].properties.description)
            .setHTML('<h3>' + e.features[0].properties.id + '</h3><p> <b>Escravos traficados: </b> ' + e.features[0].properties.id + '</p>')
            .addTo(map);
    });



    map.on('mouseleave', 'pontos', function () {
        //map.getCanvas().style.cursor = '';
        
        //popup.remove();
    });

});




function desenhaPontos() {

    pontos = {
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


    //LE CADA LINHA DAS REGIOES
    for (var i = 0; i < regiao.cada.length; i++) {

        var lat_ponto = regiao.cada[i].lat;
        var long_ponto = regiao.cada[i].long;
        var nome_ponto = regiao.cada[i].region;


        //METE PONTOS PARA OBJETO
        pontos.source.data.features.push({
            'id': 'ponto',
            'type': 'Feature',
            'properties': {
                'color': '#000000', // blue
                'size': 3,
                'id': nome_ponto,
                //"description": city.cidade,
                "stroke-color": '#000000',
                "stroke-size": 0
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [long_ponto, lat_ponto]
            }
        });


    }


    map.addLayer(pontos);
}