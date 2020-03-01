function getLyrics(lyricsPath) { //runs in browser
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/" // not final
  const GENIUS_BASE_URL = "https://genius.com/";
  fetch(CORS_PROXY + GENIUS_BASE_URL + lyricsPath)
    .then(res => res.text())
    .then(strHTML => {
    	return new window.DOMParser().parseFromString(strHTML, "text/html")
    })
    .then(dom => {
        let words = ""
    	const lyrics = dom.getElementsByClassName("referent")
    	for (let i = 0; i < lyrics.length; i++) {
    	  words += lyrics[i].innerHTML
    	}
    	words = words.split('<br>').join(', ')
    	return words
    	})
}

const TEST_LYRICS_PATH = "/Sia-chandelier-lyrics";

getLyrics(TEST_LYRICS_PATH)
