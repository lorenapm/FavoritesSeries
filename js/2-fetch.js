"use strict";

function preventSubmit(event) {
  event.preventDefault();
}
form.addEventListener("submit", preventSubmit);

function handleSearchSeries() {
  searchSerie = text.value.toLowerCase();
  fetch(`//api.tvmaze.com/search/shows?q=${searchSerie}`)
    .then((response) => response.json())
    .then((data) => {
      seriesData = data;
      printSeries(seriesData);
    });
}

btn.addEventListener("click", handleSearchSeries);
