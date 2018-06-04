var maxViagensIguais = 0;
var maxEmb = 0;

var anos = new HashMap();
var layers = [];

var viagensMap = {
    'id': 'lines',
    'type': 'line',
    'source': {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': []
        }
    },
    'paint': {
        'line-width': /*0.5*/ ['get', 'lineWidth'],
        'line-color': '#000000',
        'line-opacity': ['get', 'lineOpacity']
    }
};



var cidadesMap = {
    'id': 'cidades',
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
};

var rl=false;
$(document).ready(function () {

    trataInfo();
    getInfoToDraw();

    presentMap();
    layers.push(viagensMap);
    layers.push(cidadesMap);
    
    //ver slider
    document.getElementById('map').onkeypress = function () {
        rl = !rl;
        if (rl){
            loadMap(layers);
        } else {
            removeMapL(layers);
        };
    };
});

function trataInfo() {
    for (var l = 0; l < data.length; l++) {
        var ano = data[l].year;

        var id = data[l].voyageid;
        var emb = data[l].embarked;
        var disemb = data[l].disembarked;

        var rgpurchase = getcoordinatesbyname(data[l].regionpurchase);
        var rglanding = getcoordinatesbyname(data[l].regionlanding);

        //SE A LINHA TIVER DADOS INSUFICIENTES
        //Se tiver pelo menos 1 regiao ( de embarque ou de desembarque )
        if (!(rgpurchase === "") && !(rglanding === "")) {
            //vê se não tem dados de emb e disemb
            if (!(emb === "") && !(disemb === "")) {
                //se tiver dados adiciona viagem à regiao e ao ano
                if (!anos.containsKey(ano)) {
                    anos.put(ano, new Ano(ano));
                };
                var nesteano = anos.get(ano);
                nesteano.addCity(rgpurchase, true);
                nesteano.addCity(rglanding, false);

                nesteano.addDePara(rgpurchase.regiao, rglanding.regiao, id);

                var citypurchase = nesteano.purchase.get(rgpurchase.regiao);
                citypurchase.addTrip(id, emb, disemb, rgpurchase.regiao, rglanding.regiao);

                var citylanding = nesteano.landing.get(rglanding.regiao);
                citylanding.addTrip(id, emb, disemb, rgpurchase.regiao, rglanding.regiao);


            };
        };
    };

    anos.values().forEach(function (a) {
        var maxViagensIguaisAno = 0
        var maxEmbAno = a.embPorAno();

        var trajetos = a.viagensDePara;
        trajetos = trajetos.values();
        trajetos.forEach(function (trajeto) {
            var tamanho = trajeto.length;
            if (tamanho > maxViagensIguaisAno) {
                maxViagensIguaisAno = tamanho;
            };
        });
        if (maxViagensIguaisAno > maxViagensIguais) {
            maxViagensIguais = maxViagensIguaisAno;
        };

        if (maxEmbAno > maxEmb) {
            maxEmb = maxEmbAno;
        };
    });
};

function getInfoToDraw() {
    var cities = [];
    anos.values().forEach(function (ano) {
        //adiciona cities of PURCHASE
        ano.purchase.values().forEach(function (c) {
            if (!cities.includes(c)) {
                cities.push(c);
            };
        });
        //adiciona cities of LANDING
        ano.landing.values().forEach(function (c) {
            if (!cities.includes(c)) {
                cities.push(c);
            };
        });
    });
    cities.forEach(function (c) {
        addCityMap(c);
    });

    //ver nº de viagens com trajeto igual
    var trajeto_vezes = new HashMap();
    anos.values().forEach(function (ano) {
        ano.viagensDePara.keys().forEach(function (key) {
            var nvezes = 0;
            if (!trajeto_vezes.containsKey(key)) {
                nvezes = ano.viagensDePara.get(key).length;
            } else {
                nvezes = trajeto_vezes.get(key) + ano.viagensDePara.get(key).length;
            };
            trajeto_vezes.put(key, nvezes);
        });
    });
    trajeto_vezes.keys().forEach(function (v) {
        addTripMap(v, trajeto_vezes.get(v), maxViagensIguais);
    });
};

function addCityMap(city) {
    cidadesMap.source.data.features.push({
        'id': city.cidade,
        'type': 'Feature',
        'properties': {
            'color': colorCity(city.isPurchase)[1], // blue
            'size': city.SizeCircle(maxEmb),
            'id': city.cidade,
            "description": city.cidade,
            "stroke-color": colorCity(city.isPurchase)[0],
            "stroke-size": city.sizeStroke()
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [city.longitude, city.latitude]
        }
    });
};

function addTripMap(de_para, n_viagens, maxNViagens) {
    var line_o = map_range(n_viagens, 0, maxNViagens, 0.2, 0.5);
    var line_w = map_range(n_viagens, 0, maxNViagens, 0.2, 0.3);
    var de = getcoordinatesbyname(de_para.split(" - ")[0]);
    var para = getcoordinatesbyname(de_para.split(" - ")[1]);

    viagensMap.source.data.features.push({
        'id': de_para,
        'type': 'Feature',
        'properties': {
            'id': de_para,
            "description": de_para,
            'lineWidth': line_w,
            'lineOpacity': line_o
        },
        'geometry': {
            'type': 'LineString',
            'coordinates': [
                [de.longitude, de.latitude],
                [para.longitude, para.latitude]
            ]
        }
    });
};

function colorCity(isP) {
    var c = ['black'];
    if (isP) {
        c.push("white");
    } else {
        c.push("black");
    };
    return c;
};

function getcoordinatesbyname(name) {
    var getRLatLng;
    for (var j = 0; j < data_coordinates.length; j++) {
        if (data_coordinates[j].region == name) {
            getRLatLng = new Coordenadas(data_coordinates[j].region, data_coordinates[j].lat, data_coordinates[j].long);
            return getRLatLng;
            break;
        } else {
            getRLatLng = new Coordenadas("Other", 0, 0);
        };
    };
    return getRLatLng;
};
