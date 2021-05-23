"use strict";

function printSeries(seriesData) {
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
}
