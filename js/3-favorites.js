"use strict";

//array vacío para las series favoritas
let favoriteSeries = [];
console.log(favoriteSeries);

// función que recorre las fichas de series
function addListenersToSeries() {
  const allSeriesCards = document.querySelectorAll(".js-favorite");
  for (const eachSerie of allSeriesCards) {
    eachSerie.addEventListener("click", handleClickSerie);
  }
}

// elegir las series favoritas del listado
function handleClickSerie(event) {
  const showSerieItem = event.currentTarget;
  console.log(showSerieItem);

  // cambia a la clase a favorites cuando pinchas sobre la serie
  showSerieItem.classList.toggle("favorites1");
}

//Escucho a todas las series filtradas,

/*function listenerSeries() {
  const liElement = document.querySelectorAll(".js-favorite");
  for (let i = 0; i < liElement.length; i++) {
    liElement[i].addEventListener("click", handleClickSerie);
  }
}*/

//cambiar el fondo cuando eligen serie
/*function handleClickSerie(event) {
  const clicked = event.currentTarget;
  clicked.classList.toggle("favorite");
}*/

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
