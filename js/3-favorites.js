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

// elegir las series favoritas del listado y cambiar la clase
function handleClickSerie(event) {
  const showSerieItem = event.currentTarget;
  showSerieItem.classList.toggle("favorites1");
  //selecciono los favoritos según su id
  const showSerieId = parseInt(showSerieItem.id);
  //lo busco en el mi array de datos
  const showIdData = seriesData.find(
    (itemSerie) => itemSerie.id === showSerieId
  );

  if (showIdData === undefined) {
    favoriteSeries.push(showIdData);
  }
  const filteredSeries = filterSeries();

  //render
  rederFavSeries(filterSeries);
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
