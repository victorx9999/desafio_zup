let image = document.getElementById("image");
let nome = document.getElementById("nome");
let especie = document.getElementById("especie");
let condicao = document.getElementById("condicao");

let image1 = document.getElementById("image1");
let nome1 = document.getElementById("nome1");
let especie1 = document.getElementById("especie1");
let condicao1 = document.getElementById("condicao1");

let image2 = document.getElementById("image2");
let nome2 = document.getElementById("nome2");
let especie2 = document.getElementById("especie2");
let condicao2 = document.getElementById("condicao2");

traduzirCondicao = (data) => {
  if (data.status == "unknown") {
    return "Não sabemos";
  } else if (data.status == "Alive") {
    return "Sim";
  } else {
    return "Não. Está morto";
  }
};

gerarValorAletorio = () => {
  return Math.floor(Math.random() * 671);
};

atualizarPagina = () => {
  window.location.reload();
};

pegarPersonagem = () => {

  const numeroAleatorio = [
    gerarValorAletorio(),
    gerarValorAletorio(),
    gerarValorAletorio(),
  ];

  //   let numeroAleatorio = gerarValorAletorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      image.src = data[0].image;
      image.alt = data[0].name;
      nome.innerHTML = data[0].name;
      condicao.innerHTML = data[0].species;
      especie.innerHTML = traduzirCondicao(data[0]);
        
      image1.src = data[1].image;
      image1.alt = data[1].name;
      nome1.innerHTML = data[1].name;
      condicao1.innerHTML = data[1].species;
      especie1.innerHTML = traduzirCondicao(data[1]);

      image2.src = data[2].image;
      image2.alt = data[2].name;
      nome2.innerHTML = data[2].name;
      condicao2.innerHTML = data[2].species;
      especie2.innerHTML = traduzirCondicao(data[2]);
        
    });
};

pegarPersonagem()
