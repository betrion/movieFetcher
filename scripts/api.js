import { globalConfig } from "./config.js";

async function fetchData(userSearch = "Guardians of the galaxy") {
  // fetchaj link i cekaj odgovor
  let apikey = globalConfig.apikey;
  let movieTitle = `t=${globalConfig.search}`;
  let movieResponse = await fetch(
    `http://www.omdbapi.com/?${movieTitle}&${apikey}`,
    { headers: { Accept: "application/json" } }
  );
  let movieData = await movieResponse.json();
  return movieData;
}

const getMovie = async () => {
  const response = await fetchData();
  console.log(response);
};

getMovie();
