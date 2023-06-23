
// Movies JavaScript Exercise
// Problem Description
// The goal of this exercise is to display a list of actors who have been in a movie with both Nicolas Cage and Keanu Reeves (but not necessarily at the same time). This document describes the API endpoints available to you that contain all the data needed to identify these actors and validate the results.
// You may use any JavaScript SPA framework to complete this exercise (we use Angular). When you have completed the project, send the results to your recruiter. A shared link to Google Drive or Dropbox is preferred. You may also zip the entire folder and include it as an email attachment. Remember to remove node_modules, and include steps to build and run your solution in your email (e.g. unzip, then run ng start).
// Display
// Create a single web page that displays the final list of actors and the response from the validation endpoint. This page can also display any other information you deem relevant.
// About the Data
// The data used in this exercise was downloaded from IMDB. It is not a complete dataset and may not contain your movies.
// Basics
// Authentication is provided by the presence of the x-chmura-cors header. You have been assigned a personal access token that should be sent as the value for this header. In the curl examples below, <access_token> should be substituted with your personal access token.
// Movies
// Provides a list of movies and the actors that starred in them.
// curl --request GET \
//   --url https://switch-yam-equator.azurewebsites.net/api/movies \
//   --header 'x-chmura-cors: <access_token>'
// [
//  { "movieId": 365478,
// "title": "Man with the Screaming Brain", "actors": [331341, 132257, 126364, 1646]
//  }, ... ]
// Actors
// Provides a list of actors and their IDs.
//  curl --request GET \
//   --url https://switch-yam-equator.azurewebsites.net/api/actors \
//   --header 'x-chmura-cors: <access_token>'
//  [
//  { "actorId": 168,
//    "title": "Samuel L. Jackson"
//  }, ...
// ]
// Validation
// Accepts results in JSON format and returns an HTTP 200 response if the data are correct.
//  curl --request POST \
// --url https://switch-yam-equator.azurewebsites.net/api/validation \ --header 'x-chmura-cors: <access_token>' \
// --data '<results>'
//  [
// {
// "Name": "Alan Smithee", "KRMovies": [
//     "The Matrix",
//     "The Matrix Revolutions"
// ]
// "NCMovies": [

// "Gone in Sixty Seconds"
// ] }, ...
// ]

//Step 1 => Create a Map to easily access actor name for any given id in O(1) time

const actorMap = new Map( actors.map(actor => [actor.actorId, actor]) );
//actorMap.get(124).name;
//'Ethan Hawke'

//Step2 => We need to create 2 lookups - one each for list of actors that have worked with either Keanu Reeves or Nicolas Cage

let KRM = new Map();
let NCM = new Map();

movies.forEach(movie => {

  // Make a lookup for all actors who worked with KR . An actor may have multiple movies so we use an array to append to it.
  if (movie.actors.includes(206)) {
    movie.actors.forEach(actor => {
      if (actor !== 206) {
        if (KRM.has(actor)) {
          KRM.get(actor).push(movie);
        } else {
          KRM.set(actor, [movie]);
        }
      }
    });
  }
// Make a similar lookup for all actors who worked with NC.
  if (movie.actors.includes(115)) {
    movie.actors.forEach(actor => {
      if (actor !== 115) {
        if (NCM.has(actor)) {
          NCM.get(actor).push(movie);
        } else {
          NCM.set(actor, [movie]);
        }
      }
    });
  }
});

// Step 3 => To find the intersection of actors who have worked with both KR & NC, we just use keys to compare and get actor Id's
let commonMovies = Array.from(KRM.keys()).filter(key => NCM.has(key));

//From actor map get names of all ids in commonKeys 
const names = commonMovies.map(actorId => {
const obj = actorMap.get(actorId);
  return obj ? obj.name : undefined;
});

//Step 4 => Format data as per the expected result schema 
const resultSchema = [];

commonMovies.forEach(actorId => {
  const Name = actorMap.get(actorId).name;

  const KRMoviesArray = KRM.get(actorId);
  const KRMovies = KRMoviesArray ? KRMoviesArray.map(movie => movie.title) : [];

  const NCMoviesArray = NCM.get(actorId);
  const NCMovies = NCMoviesArray ? NCMoviesArray.map(movie => movie.title) : [];

  const obj = { Name, KRMovies, NCMovies };
  resultSchema.push(JSON.stringify(obj));
});



