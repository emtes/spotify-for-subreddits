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

// app.get('/callback', (req, res) => {
//   console.log(req)
// });

app.listen(PORT, () => {
  console.log(`App is Live on Port ${PORT}...`);
});

let clientId = 'b210893e3a014b3ab0c3394befe7d80f',
  clientSecret = 'fa81079f55f54da580e8fcaba86bf8ba';

// Create the api object with the credentials
let spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

console.log(spotifyApi)
// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    let data2 = data.body['access_token']
    console.log(data2)

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
)

//Song lyrics request
const getSongLyrics = (song, artist) =>{
  fetch(`https://api.lyrics.ovh/v1/${song}/${artist}`)
  	.then(info => info.json())
  	.then(song => console.log(song.lyrics))
 }
 getSongLyrics('Coldplay','Adventure of a Lifetime')

 const makeRequest =  async (method,url,data) =>{
	const response = await fetch(url, {
		method: method,
		body: JSON.stringify({
			data: data
		}),
		headers:{
			'Content-Type': ' application/json'
		}
	})





