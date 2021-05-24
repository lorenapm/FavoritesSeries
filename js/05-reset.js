"use strict";
function addResetFav() {
  const btnResetSerie = document.querySelectorAll(".js-btn-favorite");
  for (const eachBtn of btnResetSerie) {
    eachBtn.addEventListener("click", handleResetFav);
  }
}
/*function handleResetFav(event) {
  //busco el index de la clicada por su id en favoritos
  const pressButtonReset = event.currentTarget.id;
  const FavResetId = parseInt(pressButtonReset);
  let i = favoriteSeries.findIndex(
    (seriefav) => seriefav.show.id === FavResetId
  );
  //borro la serie clicada
  favoriteSeries.splice(i, 1);

  //paintFavoriteSeries();
  //printSeries(seriesData);
  //localStorage.setItem("favoriteSeries", JSON.stringify(favoriteSeries));
} */

/*function resetAllFav() {

}*/
