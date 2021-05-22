//variable vacía para pintar el array que me devuelve API
let seriesData = [];

function handleSearchSeries(event) {
  event.preventDefault();
  fetch(`http://api.tvmaze.com/search/shows?q=${text.value}`)
    .then((response) => response.json())
    .then((data) => {
      //variable vacía para pintar luego el html
      let listHTML = "";
      for (const series of data) {
        console.log(series.show.image.medium);
        listHTML += `<li class="serie__list--item js-serie"><img src="${series.show.image.medium}" alt="${series.name}"><h3 class="item__name">${series.show.name}</h3></li>`;
      }
      //pintar en el HTML
      listSeries.innerHTML = listHTML;
    });
}
btn.addEventListener("click", handleSearchSeries);
