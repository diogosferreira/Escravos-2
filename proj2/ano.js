//class Ano
var Ano = function (a) {
    this.ano = a;
    this.purchase = new HashMap();
    this.landing = new HashMap();
    this.viagensDePara = new HashMap();
};

Ano.prototype = {

    addCity: function (coordenadas, isPurchase) {
        var cidade = new Cidade(coordenadas, isPurchase);
        if (isPurchase == true) {
            this.purchase.put(coordenadas.regiao, cidade);
        } else {
            this.landing.put(coordenadas.regiao, cidade);
        }
    },

    embPorAno: function () {
        var e = 0;
        this.purchase.values().forEach(function (c) {
            e += c.embPorCidade();
        });
        return e;
    },

    disembPorAno: function () {
        var e = 0;
        this.purchase.values().forEach(function (c) {
            e += c.disembPorCidade();
        });
        return e;
    },

    mortosPorAno: function () {
        var e = 0;
        this.purchase.values().forEach(function (c) {
            e += c.mortosPorCidade();
        });
        return e;
    },

    addDePara: function (de, para, id) {
        if (!this.viagensDePara.containsKey(de + " - " + para)){
            this.viagensDePara.put(de + " - " + para, []);
        }
        this.viagensDePara.get(de + " - " + para).push(id);
    }
};
