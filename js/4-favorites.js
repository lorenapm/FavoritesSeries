"use strict";

// función que recorre las fichas de series y las escucha
function addListenersToSeries() {
  const allSeriesCards = document.querySelectorAll(".js-favorite");
  for (const eachSerie of allSeriesCards) {
    eachSerie.addEventListener("click", handleClickSerie);
  }
}

// elige las series favoritas del listado y cambiar la clase
function handleClickSerie(event) {
  const showSerieItem = event.currentTarget;
  showSerieItem.classList.toggle("favorites1");
  //selecciono los favoritos según su id
  const showSerieId = parseInt(showSerieItem.id);

  //lo busco en el mi array de datos
  const showIdData = seriesData.find((serie) => serie.show.id === showSerieId);

  //lo busco con mi array de favoritos
  const showSerieFav = favoriteSeries.find(
    (serieId) => serieId.show.id === showSerieId
  );

  //condicional: si no está en favoritos lo añado, sino alerta
  if (showSerieFav === undefined) {
    favoriteSeries.push(showIdData);
  } else {
    window.alert("Esta serie ya está entre sus favoritas");
  }

  //lo añado a mis favoritos para después pintarlos

  //guardo en localStorage para que la lista de favoritos no se borre

  localStorage.setItem("favoriteSeries", JSON.stringify(favoriteSeries));

  paintFavoriteSeries();
}

function getLocalStorage() {
  if (localStorage.getItem("favoriteSeries") !== null) {
    favoriteSeries = JSON.parse(localStorage.getItem("favoriteSeries"));
    paintFavoriteSeries();
  }
}

//getLocalStorage();

function addResetFav() {
  const btnResetSerie = document.querySelectorAll(".js-btn-favorite");
  for (const eachBtn of btnResetSerie) {
    eachBtn.addEventListener("click", handleResetFav);
  }
}
function handleResetFav(event) {
  //busco el index de la clicada por su id en favoritos
  const pressButtonReset = event.currentTarget.id;
  const FavResetId = parseInt(pressButtonReset);
  let i = favoriteSeries.findIndex(
    (seriefav) => seriefav.show.id === FavResetId
  );
  //borro la serie clicada
  console.log(favoriteSeries);
  favoriteSeries.splice(i, 1);
  console.log(favoriteSeries, favoriteSeries.length);
  //localStorage.setItem("favoriteSeries", JSON.stringify(favoriteSeries));
  paintFavoriteSeries();
  printSeries(seriesData);
}

function paintFavoriteSeries() {
  //variable vacía para pintar luego el html. Recorro y pinto.
  let listFavHTML = "";
  ulFavorites.innerHTML = "";
  for (const eachFavoriteSerie of favoriteSeries) {
    const fav = eachFavoriteSerie.show;
    let image = "";
    if (fav.image === null) {
      image = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
    } else {
      image = fav.image.medium;
    }

    listFavHTML += `<li id="${fav.id}" class="serie__list--item js-favorite favorites1"> <button class="btn-favorite js-btn-favorite " id="${fav.id}">X</button ><img src="${image}" alt="${fav.name}"><h3 class="item__name">${fav.name}</h3></li>`;
  }
  ulFavorites.innerHTML = listFavHTML;
  addResetFav();
}
