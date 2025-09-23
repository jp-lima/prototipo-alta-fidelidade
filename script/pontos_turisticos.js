const pontosTuristicos = [
  {nome: "Orla de Atalaia", preco: "Gratuito", rating: 4.8, avaliacoes: 5000},
  {nome: "Oceanário de Aracaju", preco: "R$ XX (entrada paga)", rating: 4.5, avaliacoes: 1200},
  {nome: "Arcos da Orla de Atalaia", preco: "Gratuito", rating: 4.7, avaliacoes: 3000},
  {nome: "Museu da Gente Sergipana", preco: "R$ XX", rating: 4.6, avaliacoes: 2000},
  {nome: "Colina de Santo Antônio", preco: "Gratuito", rating: 4.4, avaliacoes: 900},
  {nome: "Palácio-Museu Olímpio Campos", preco: "Gratuito", rating: 4.3, avaliacoes: 800},
  {nome: "Parque da Cidade", preco: "Gratuito", rating: 4.2, avaliacoes: 600},
  {nome: "Orla Pôr do Sol (Mosqueiro)", preco: "Gratuito", rating: 4.8, avaliacoes: 1500},
  {nome: "Praia de Aruana", preco: "Gratuito", rating: 4.5, avaliacoes: 1100},
  {nome: "Centro Histórico (Mercados + Praças Fausto Cardoso etc.)", preco: "Gratuito", rating: 4.7, avaliacoes: 2500}
];

  const carousel = document.getElementById("carousel");

    pontosTuristicos.forEach(ponto => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
      <div class="container-dados"> 
        <div class="container-titulo"> 
          <h3>${ponto.nome}</h3>
        </div>  
        <img src="../images/hotel-exp1" alt="${ponto.nome}">
        <p>${ponto.preco}</p>
      </div>
      
        <div class="rating-container">
          <p class="rating">${ponto.rating} ★</p>
          <p>${ponto.avaliacoes} Avaliações</p>
        </div>
      `;
      carousel.appendChild(card);
    });



  const carousel_antigas = document.getElementById("carousel-hospedagens-antigas");

    hospedagensAntigas.forEach(hotel => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
      <div class="container-dados"> 
        <div class="container-titulo">
          <h3>${hotel.nome}</h3>
        </div>
          <img src="../images/hotel-exp1" alt="${hotel.nome}">
          <p>${hotel.preco}</p>
      </div>
        <div class="rating-container">
          <p class="rating">${hotel.rating} ★</p>
          <p>${hotel.avaliacoes} Avaliações</p>
        </div>
      `;
      carousel_antigas.appendChild(card);
    });
