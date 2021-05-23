"use strict";

//array vacío para las series favoritas
let favoriteSeries = [];

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
  const showIdData = seriesData.find((serie) => serie.show.id === showSerieId);

  //lo añado a mis favoritos para después pintarlos
  favoriteSeries.push(showIdData);

  //guardo en localStorage para que la lista de favoritos no se borre
  localStorage.setItem("favoriteSeries", JSON.stringify(favoriteSeries));

  paintFavoriteSeries();
}

function paintFavoriteSeries() {
  //variable vacía para pintar luego el html. Recorro y pinto.
  let listFavHTML = "";
  for (const eachFavoriteSerie of favoriteSeries) {
    const fav = eachFavoriteSerie.show;
    let image = "";
    if (fav.image === null) {
      image = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
    } else {
      image = fav.image.medium;
    }

    listFavHTML += `<li id="${fav.id}" class="serie__list--item js-favorite favorites1"><img src="${image}" alt="${fav.name}"><h3 class="item__name">${fav.name}</h3></li>`;
    ulFavorites.innerHTML = listFavHTML;
  }
}

//const filteredSeries = filterSeries();

//render
//rederFavSeries(filteredSeries);

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
listSeries.addEventListener("click", handleClickSerie);
*/
