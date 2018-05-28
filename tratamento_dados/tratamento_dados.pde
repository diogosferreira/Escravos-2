Table original, tabela_anos, tabela_primeira_vista;
JSONArray data, reg_partidas, reg_chegadas;

void setup() {

  original = loadTable("tabela_original.csv", "header");
  criaTabelaAnos();
  //criaJSON();
  criaTabelaPrimeiraVista();
  
  
  println("FIM");
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

    if (ano.equals("")) {
      for (int j = i - 1; j > 0; j--) {
        if (ano.equals("")) {
          ano = original.getRow(j).getString(1);
        }
      }
    }

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

void criaTabelaPrimeiraVista() {

  tabela_primeira_vista = new Table();
  tabela_primeira_vista.addColumn("partida");
  tabela_primeira_vista.addColumn("num_partida");
  tabela_primeira_vista.addColumn("chegada");
  tabela_primeira_vista.addColumn("num_chegada");

  for (TableRow linha : tabela_anos.rows()) {

    String partida = linha.getString("regiao_compra");
    int num_partida = linha.getInt("embarcados");
    String chegada = linha.getString("regiao_chegada");
    int num_chegada = linha.getInt("desembarcados");

    if (tabela_primeira_vista.getRowCount() == 0) {
      TableRow novaLinha = tabela_primeira_vista.addRow();
      novaLinha.setString("partida", partida);
      novaLinha.setInt("num_partida", num_partida);
      novaLinha.setString("chegada", chegada);
      novaLinha.setInt("num_chegada", num_chegada);
    } else {
      for (TableRow l : tabela_primeira_vista.rows()) {
        if (l.getString("partida").equals(partida) && l.getString("chegada").equals(chegada)) {
          l.setInt("num_partida", l.getInt("num_partida") + num_partida);
          l.setInt("num_chegada", l.getInt("num_chegada") + num_chegada);
        } else {
          TableRow novaLinha = tabela_primeira_vista.addRow();
          novaLinha.setString("partida", partida);
          novaLinha.setInt("num_partida", num_partida);
          novaLinha.setString("chegada", chegada);
          novaLinha.setInt("num_chegada", num_chegada);
        }
      }
    }
  }

  saveTable(tabela_primeira_vista, "tabela_primeira_vista.csv");
}
