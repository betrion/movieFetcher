import { globalConfig } from "./config.js"; //api key and search term

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

const getMovie = async (userSearch, divUpdate) => {
  const response = await fetchData(userSearch);
  console.log(response);
  globalConfig.search = userSearch;
  divUpdate.innerText = `Did you mean "${response.Title}"?`;
};

export { getMovie };
