import { getMovie } from "./api.js";
import { globalConfig } from "./config.js";

const movieDisplayDiv = document.querySelector(".movieDiv");

const currentTooltip = document.querySelector(".currentTitle");

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();

  getMovie(globalConfig.search, currentTooltip);
});

//logic for clicking and submiting
document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault();
  getMovie(globalConfig.search, currentTooltip);
});

//update the value in object
document.querySelector(".search").addEventListener("input", (e) => {
  globalConfig.search = e.target.value;
  getMovie(globalConfig.search, currentTooltip);
});

//reset button
document.querySelector(".reset").addEventListener("click", (e) => {
  movieDisplayDiv.innerHTML = "";
  currentTooltip.innerHTML = "";
});
