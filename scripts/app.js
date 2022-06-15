import { getMovie, tooltipMovie } from "./api.js";
import { globalConfig } from "./config.js";

const movieDisplayDiv = {
  title: document.querySelector(".smallTitle"),
  image: document.querySelector(".poster"),
  description: document.querySelector("[data-key='desc'"),
};
const currentTooltip = document.querySelector(".currentTitle");

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();

  getMovie(globalConfig.search, currentTooltip);
});

//logic for clicking, submiting and live searching
document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault();
  getMovie(globalConfig.search, movieDisplayDiv);
});

//update the value in object
document.querySelector(".search").addEventListener("input", (e) => {
  globalConfig.search = e.target.value;
  tooltipMovie(globalConfig.search, currentTooltip);
});

//reset button
document.querySelector(".reset").addEventListener("click", () => {
  resetStuff();
});

function resetStuff() {
  movieDisplayDiv.title.innerHTML = "";
  movieDisplayDiv.image.src = "";
  movieDisplayDiv.description.innerHTML = "";

  globalConfig.search = "";
}
resetStuff();
