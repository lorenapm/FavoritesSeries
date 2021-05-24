"use strict";
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
  favoriteSeries.splice(i, 1);

  paintFavoriteSeries();
  //printSeries(seriesData);
  //localStorage.setItem("favoriteSeries", JSON.stringify(favoriteSeries));
}

const newBtnReset = document.createElement("button");
const newContentBtn = document.createTextNode("Reset");
boxFavorites.appendChild(newBtnReset);
newBtnReset.appendChild(newContentBtn);

function handleResetAllFav() {
  favoriteSeries = [];
  localStorage.removeItem("favoriteSeries");
  paintFavoriteSeries();
  printSeries(seriesData);
}
newBtnReset.addEventListener("click", handleResetAllFav);
