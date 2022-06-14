import { getMovie } from "./api.js";

const movieDisplayDiv = document.querySelector(".movieDiv");
const currentTitleDiv = document.querySelector(".currentTitle");

const searchBar = document
  .querySelector(".search")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    getMovie(e.target.value, currentTitleDiv);
  });

let searchButton = document
  .querySelector(".submit")
  .addEventListener("click", (e) => {
    e.preventDefault();
    searchBar();
  });
