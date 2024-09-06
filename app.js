function pesquisar() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for string sem nada
    if (!campoPesquisa) {
      section.innerHTML = "Nenhum Carro encontrado"
      return
    };

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        ano = dado.ano.toString().toLowerCase()
        // se titulo includes campoPesquisa
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| ano.includes(campoPesquisa)) {
          // cria um novo elemento
          resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;

        }
      
    }

    if (!resultados) {
      resultados = "<p>Nenhum carro encontrado</p>"
    }
  
    // Atribui o HTML construído ao elemento 'section', atualizando a página
    section.innerHTML = resultados;
  }
