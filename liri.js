// Requirements
var fs = require('fs')
var keys = require('./keys.js')
var request = require('request')
var Spotify = require('node-spotify-api');
var Twitter = require('twitter')
var newSpotify = new Spotify(keys.spotify);
var Client = new Twitter(keys.twitter);

// Movies
if(process.argv[2] === 'movie-this'){
if(!process.argv[3]){
 var movie = 'Mr+Nobody';
}
else{
var movie = process.argv[3];
}
request("http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey=trilogy", function (error, response, body) {

    var movieBody = JSON.parse(body);
    var movieTitle = movieBody.Title;
    var imdbRating = movieBody.imdbRating;
    var rottenTomatoesRating = movieBody.Ratings[1].Value;
    var movieLanguage = movieBody.Language;
    var movieCountry = movieBody.Country;
    var movieActors = movieBody.Actors;
    var movieYear = movieBody.Year;
    var moviePlot = movieBody.Plot;

    if (!error && response.statusCode === 200) {
        console.log(
   `
    Your Movie Title: ${movieTitle}
    IMDB Rating: ${imdbRating}  
    Rotten Tomatoes Rating: ${rottenTomatoesRating}  
    Movie Language: ${movieLanguage}  
    Country of Origin: ${movieCountry}  
    Actors: ${movieActors}  
    Release Year: ${movieYear}\n  
    Movie Plot: ${moviePlot}\n`  
    );

    }

});

}



