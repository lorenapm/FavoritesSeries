"use strict";

//Escucho a todas las series filtradas,

function listenerSeries() {
  const liElement = document.querySelectorAll(".js-favorite");
  for (let i = 0; i < liElement.length; i++) {
    liElement[i].addEventListener("click", handleClickSerie);
  }
}

//cambiar el fondo cuando eligen serie
function handleClickSerie(event) {
  const clicked = event.currentTarget;
  clicked.classList.toggle("favorite");
}

/*listenerSeries();
//guardo en un array las series favoritas
let favoriteSeries = [];

function handleClickSerie(event) {
  const whereUserCliked = event.target;
  const whereIAddedEvent = event.currentTarget;
  const selectedId = whereIAddedEvent.id;
  const serieInfo = seriesData.find((serie) => serie.id === selectedId);
  console.log(serieInfo);
}
listSeries.addEventListener("click", handleClickSerie);*/
