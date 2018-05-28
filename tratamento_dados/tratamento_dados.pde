Table original, tabela_anos;
JSONArray data;

StringDict partidas, chegadas;

void setup() {

  original = loadTable("tabela_original.csv", "header");
  criaTabelaAnos();
  criaJSON();
  criaJSONPrimeiraVista();


}

void draw() {
}

void criaTabelaAnos() {

  tabela_anos = new Table();
  tabela_anos.addColumn("id");
  tabela_anos.addColumn("ano");

  for (int i = 0; i < original.getRowCount(); i ++) {

    String id = original.getRow(i).getString(0);
    String ano = original.getRow(i).getString(1);

    TableRow novaLinha = tabela_anos.addRow();
    novaLinha.setString("id", id);
    novaLinha.setString("ano", ano);
    novaLinha.setString("regiao_compra", original.getRow(i).getString("regiao_compra"));
    novaLinha.setString("regiao_chegada", original.getRow(i).getString("regiao_chegada"));
    novaLinha.setString("embarcados", original.getRow(i).getString("embarcados"));
    novaLinha.setString("desembarcados", original.getRow(i).getString("desembarcados"));
  }
  
  saveTable(tabela_anos, "tabela_anos.csv");
}

void criaJSON() {
  data = new JSONArray();

  for (int i = 0; i < tabela_anos.getRowCount(); i++) {
    JSONObject viagem = new JSONObject();
    String ano = tabela_anos.getRow(i).getString(1);
    
    if(ano.equals("")){
      for(int j = i - 1; j > 0; j--){
        if(ano.equals("")){
          ano = tabela_anos.getRow(j).getString(1);
        }
      }
    }
    
    viagem.setString("id", tabela_anos.getRow(i).getString("id"));
    viagem.setString("ano", ano);
    viagem.setString("regiao_compra", original.getRow(i).getString("regiao_compra"));
    viagem.setString("regiao_chegada", original.getRow(i).getString("regiao_chegada"));
    viagem.setString("embarcados", original.getRow(i).getString("embarcados"));
    viagem.setString("desembarcados", original.getRow(i).getString("desembarcados"));
    
    
    data.setJSONObject(i, viagem);
  }

  saveJSONArray(data, "anos_id.json");
}

void criaJSONPrimeiraVista(){
  partidas = new StringDict();
  chegadas = new StringDict();
  
  for 
  
}
