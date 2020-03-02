const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const PORT = 8080;
const SpotifyWebApi = require('spotify-web-api-node');

app.set("view engine", "ejs");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => res.render("layout"));

app.listen(PORT, () => {
  console.log(`App is Live on Port ${PORT}...`);
});




// credentials are optional
let scopes = ['user-read-private', 'user-read-email'],
  redirectUri = 'https%3A%2F%2Flocalhost%3A8080',
  clientId = 'b210893e3a014b3ab0c3394befe7d80f',
  clientSecret = 'fa81079f55f54da580e8fcaba86bf8ba',
  state = '123';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
let spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId,
  clientSecret: clientSecret;
});

// Create the authorization URL
let authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);


// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
console.log(authorizeURL);

// Retrieve an access token and a refresh token
// spotifyApi.authorizationCodeGrant(code).then(
//   function(data) {
//     console.log('The token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body['access_token']);
//     console.log('The refresh token is ' + data.body['refresh_token']);

//     // Set the access token on the API object to use it in later calls
//     spotifyApi.setAccessToken(data.body['access_token']);
//     spotifyApi.setRefreshToken(data.body['refresh_token']);
//   },
//   function(err) {
//     console.log('Something went wrong!', err);
//   }
// );