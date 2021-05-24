"use strict";

function handleSearchSeries(event) {
  event.preventDefault();

  if (localStorage.getItem("favoriteSeries") !== null) {
    favoriteSeries = JSON.parse(localStorage.getItem("favoriteSeries"));
    paintFavoriteSeries(favoriteSeries);
  }
  searchSerie = text.value.toLowerCase();
  fetch(`//api.tvmaze.com/search/shows?q=${searchSerie}`)
    .then((response) => response.json())
    .then((data) => {
      seriesData = data;
      printSeries(seriesData);
    });
}
btn.addEventListener("click", handleSearchSeries);
