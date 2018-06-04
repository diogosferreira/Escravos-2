//class Cidade
var Cidade = function (c, isP) {
	this.cidade = c.regiao;
	this.latitude = c.latitude ;
	this.longitude = c.longitude ;
	this.viagens = new HashMap();
    this.isPurchase = isP;
};

Cidade.prototype = {

	addTrip: function(id, emb, disemb, cityP, cityL) {
		var trip = new Viagem(id,  emb, disemb, cityP, cityL);
        this.viagens.put(id, trip);
	},
    
    embPorCidade: function(){
        var e = 0;
        for(var v in this.viagens.values()){
            e += v.emb;
        }
        return e;
    },
    
    disembPorCidade: function(){
        var e = 0;
        for(var v in this.viagens.values()){
            e += v.disemb;
        }
        return e;
    },
    
    mortosPorCidade: function(){
        var e = 0;
        for(var v in this.viagens.values()){
            e += v.mortos;
        }
        return e;
    },
    
    SizeCircle: function(maxEmb){
        var s=0;
        if(this.isPurchase){
            s = map_range(this.embPorCidade(), 0 , maxEmb, 2, 10);
        } else {
            s=2;
        }
        return s;
    },
    
    sizeStroke: function(){
        var s=0;
        if(this.isPurchase){
            s = 1
        }
        return s;
    }
};