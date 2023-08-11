const url = ('https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/from/the_godfather');
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

var search = document.getElementById("search")
var go = document.getElementById("go");
go.addEventListener("click", makeSearch);

function makeSearch(event) {
	event.preventDefault;
	console.log(search.value);
	console.log("hi");
	const url = 
	
}