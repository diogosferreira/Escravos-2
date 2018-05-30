Table original, tabela_anos, tabela_primeira_vista;
JSONArray data, reg_partidas, reg_chegadas;

void setup() {

  //original = loadTable("tabela_original.csv", "header");
  //criaTabelaAnos();
  //criaJSON();
  criaTabelaPrimeiraVista();


  println("FIM");
}

void draw() {
}

//--------------------------------
//--------------------------------
//--------------------------------

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

  boolean parou;

  Table t = loadTable("tabela_anos.csv", "header");
  Table primeira_vista = new Table();
  primeira_vista.addColumn("partida");
  primeira_vista.addColumn("chegada");
  primeira_vista.addColumn("nPartida");
  primeira_vista.addColumn("nChegada");
  //---------
  TableRow primeiraLinha = primeira_vista.addRow();
  primeiraLinha.setString("partida", t.getRow(0).getString("regiao_compra"));
  primeiraLinha.setString("chegada", t.getRow(0).getString("regiao_chegada"));
  primeiraLinha.setString("nPartida", t.getRow(0).getString("embarcados"));
  primeiraLinha.setString("nChegada", t.getRow(0).getString("desembarcados"));

  for (int i = 1; i < t.getRowCount(); i++) {
    parou = false;
    for (int j = 0; j < primeira_vista.getRowCount(); j++) {
      if (t.getRow(i).getString("regiao_compra").equals(primeira_vista.getRow(j).getString("partida")) && t.getRow(i).getString("regiao_chegada").equals(primeira_vista.getRow(j).getString("chegada"))) {
        println(i + "  j:  " + j + "   ENTROU!");
        println(t.getRow(i).getString("regiao_compra") + "     " + primeira_vista.getRow(j).getString("partida"));
        println(t.getRow(i).getString("regiao_chegada") + "     " + primeira_vista.getRow(j).getString("chegada"));
        
        int novoPartida = primeira_vista.getRow(j).getInt("nPartida") + t.getRow(i).getInt("embarcados");
        int novoChegada = primeira_vista.getRow(j).getInt("nChegada") + t.getRow(i).getInt("desembarcados");

        primeira_vista.getRow(j).setInt("nPartida", novoPartida);
        primeira_vista.getRow(j).setInt("nChegada", novoChegada);
        //saveTable(primeira_vista, "primeira_vista.csv");
        parou = true;
      } else if (j == primeira_vista.getRowCount() - 1 && parou == false) {
        TableRow novaLinha = primeira_vista.addRow();
        novaLinha.setString("partida", t.getRow(i).getString("regiao_compra"));
        novaLinha.setString("chegada", t.getRow(i).getString("regiao_chegada"));
        novaLinha.setString("nPartida", t.getRow(i).getString("embarcados"));
        novaLinha.setString("nChegada", t.getRow(i).getString("desembarcados"));
        //saveTable(primeira_vista, "primeira_vista.csv");
      }
    }
  }

  saveTable(primeira_vista, "primeira_vista.csv");
}
