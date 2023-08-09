const url = 'https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/actor/al_pachino';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '777c9617ccmshf8277229fbc7775p143a73jsn252dbe9c9665',
		'X-RapidAPI-Host': 'movie-and-tv-shows-quotes.p.rapidapi.com'
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