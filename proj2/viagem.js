//class Viagem
var Viagem = function (id, emb, disemb, cityP, cityL) {
    this.id = id;
    this.emb = emb;
    this.disemb = disemb;
    this.mortos = emb - disemb;
    this.cPurchase = cityP;
    this.cLanding = cityL;
};

