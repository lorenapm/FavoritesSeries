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
  console.log(showIdData);

  //lo busco con mi array de favoritos
  const showSerieFav = favoriteSeries.find(
    (serieId) => serieId.show.id === showSerieId
  );
  console.log(favoriteSeries);

  //condicional: si no está en favoritos lo añado, sino alerta
  if (showSerieFav === undefined) {
    favoriteSeries.push(showIdData);
  } else {
    window.alert("Esta serie ya está entre sus favoritas");
  }
  console.log(showSerieFav);
  //lo añado a mis favoritos para después pintarlos

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
