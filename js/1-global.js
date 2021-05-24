"use strict";

const text = document.querySelector(".js-text");
const btn = document.querySelector(".js-button");
const listSeries = document.querySelector(".js-series-list");
const ulFavorites = document.querySelector(".js-series-favorites");

//variable vacía para pintar el array que me devuelve API
let seriesData = [];
let searchSerie = "";
