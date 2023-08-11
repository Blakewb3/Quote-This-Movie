const url = 'https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6814aeb8fmsh277ac29f029a284p12139djsnfda8f4f8b5d5',
		'X-RapidAPI-Host': 'movie-and-tv-shows-quotes.p.rapidapi.com',
	}
};

fetch(url, options)
.then(function(res) {
    console.log(res.status)
    return res.json();
})
.then(function(data) {
    console.log(data)
})

const posterurl = 'http://www.omdbapi.com/?t=' + search.value + '&apikey=b084d09a'


fetch(posterurl)
.then(function(res) {
    console.log(res.status)
    return res.json();
})
.then(function(data) {
    console.log(data)
})