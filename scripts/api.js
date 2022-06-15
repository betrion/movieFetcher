import { globalConfig } from "./config.js"; //api key and search term

async function fetchData(userSearch = "Guardians of the galaxy") {
  // fetchaj link i cekaj odgovor
  let apikey = globalConfig.apikey;
  let movieTitle = `t=${globalConfig.search}`;
  let movieResponse = await fetch(
    `https://www.omdbapi.com/?${movieTitle}&${apikey}`,
    { headers: { Accept: "application/json" } }
  );
  let movieData = await movieResponse.json();
  return movieData;
}

const tooltipMovie = async (userSearch, divUpdate) => {
  const response = await fetchData(userSearch);
  // console.log(response);
  // globalConfig.search = userSearch;
  divUpdate.innerText = `Did you mean "${response.Title}"?`;
};

const getMovie = async (userSearch, divUpdate) => {
  const response = await fetchData(userSearch);
  // globalConfig.search = userSearch;
  divUpdate.image.src = `${response.Poster}`;
  divUpdate.image.alt = `title of movie: ${response.Title} `;
  divUpdate.title.innerText = `${response.Title}`;
  divUpdate.description.innerText = `Actors: ${response.Actors}\n Year: ${response.Year}\n Rated: ${response.Rated}\n Director: ${response.Director}\n Runtime: ${response.Runtime} \n\n Plot:\n ${response.Plot}}\n\n Ratings: ${response.Ratings[0].Source} - ${response.Ratings[0].Value}\n\n IMDB link: https://www.imdb.com/title/${response.imdbID} `;
};

export { tooltipMovie, getMovie };
