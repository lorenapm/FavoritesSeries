"use strict";
function addResetFav() {
  const btnResetSerie = document.querySelectorAll(".js-btn-favorite");
  for (const eachBtn of btnResetSerie) {
    eachBtn.addEventListener("click", handleResetFav);
  }
}
function handleResetFav(event) {
  const pressButtonReset = event.currentTarget.id;
  console.log(pressButtonReset);

  paintFavoriteSeries();
}
