"use strict";

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
