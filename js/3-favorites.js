"use strict";

//Escucho a todas las series filtradas, guardo las clicadas en un array y las vuelvo a pintar.

function listenerSeries() {
  const oneSerie = document.querySelectorAll(".js-serie");
  for (const serie of oneSerie) {
    serie.addEventListener("click", handleClickSerie);
  }
}

listenerSeries();
//guardo en un array las series favoritas
let favoriteSeries = [];

function handleClickSerie(event) {
  const whereUserCliked = event.target;
  const whereIAddedEvent = event.currentTarget;
  const selectedId = whereIAddedEvent.id;
  const serieInfo = seriesData.find((serie) => serie.id === selectedId);
  console.log(serieInfo);
}
listSeries.addEventListener("click", handleClickSerie);
