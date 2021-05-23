"use strict";

//variable vacía para pintar el array que me devuelve API
let seriesData = [];

function handleSearchSeries(event) {
  event.preventDefault();

  fetch(`http://api.tvmaze.com/search/shows?q=${text.value}`)
    .then((response) => response.json())
    .then((data) => {
      seriesData = data;

      favoriteSeries = JSON.parse(localStorage.getItem("favoriteSeries"));
      paintFavoriteSeries(favoriteSeries);

      //variable vacía para pintar luego el html. Recorro y pinto.
      let listHTML = "";
      for (const eachSerie of seriesData) {
        const series = eachSerie.show;
        let image = "";
        if (series.image === null) {
          image = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
        } else {
          image = series.image.medium;
        }
        listHTML += `<li id="${series.id}" class="serie__list--item js-favorite favorites"><img src="${image}" alt="${series.name}"><h3 class="item__name">${series.name}</h3></li>`;
        listSeries.innerHTML = listHTML;

        //Llamo a la función para poder seleccionar las favoritas
        addListenersToSeries();
      }
    });
  //handleClickSerie();
}
btn.addEventListener("click", handleSearchSeries);
