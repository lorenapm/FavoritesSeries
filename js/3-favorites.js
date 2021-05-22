"use strict";
const favorites = [];
//Escucho a todas las series filtradas y cuando elijan favorita aplico handleClickSerie

function handleClickSerie(event) {
  /*for (const serie of allSeries) {
    serie.addEventListener("click", handleClickSerie);
  }*/

  oneSerie.classList.toggle("favorite");
}
listSeries.addEventListener("click", handleClickSerie);
