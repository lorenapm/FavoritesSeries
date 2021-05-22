"use strict";

function handleSearchSeries(event) {
  event.preventDefault();
  fetch(`http://api.tvmaze.com/search/shows?q=${text.value}`)
    .then((response) => response.json())
    .then((data) => {
      seriesData = data;

      //variable vacía para pintar luego el html
      let listHTML = "";
      for (const series of seriesData) {
        /*if (series.show.image === "null") {
          src = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
        } else {
        }*/
        console.log(series);
        listHTML += `<li class="serie__list--item js-serie"><img src="${series.show.image.medium}" alt="${series.name}"><h3 class="item__name">${series.show.name}</h3></li>`;
      }
      //pintar en el HTML
      listSeries.innerHTML = listHTML;
    });
  //handleClickSerie();
}
btn.addEventListener("click", handleSearchSeries);
