"use strict";

//variable vacía para pintar el array que me devuelve API
let seriesData = [];

function handleSearchSeries(event) {
  event.preventDefault();

  if (localStorage.getItem("favoriteSeries") !== null) {
    favoriteSeries = JSON.parse(localStorage.getItem("favoriteSeries"));
    paintFavoriteSeries(favoriteSeries);
  }
  fetch(`//api.tvmaze.com/search/shows?q=${text.value}`)
    .then((response) => response.json())
    .then((data) => {
      seriesData = data;
      printSeries(seriesData);
    });
}
btn.addEventListener("click", handleSearchSeries);
