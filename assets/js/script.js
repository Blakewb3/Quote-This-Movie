var search = document.getElementById("search")
search.addEventListener("enter", makeSearch)
var go = document.getElementById("go");
go.addEventListener("click", makeSearch);
var p = document.getElementsByTagName('p');

function makeSearch(event) {
	console.log(p);
	for (let i = 0; i < p.length; i++) {
		const element = p[i];
		element.textContent = ''
		
	}
    const url = ('https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/from/' + search.value);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a6814aeb8fmsh277ac29f029a284p12139djsnfda8f4f8b5d5',
            'X-RapidAPI-Host': 'movie-and-tv-shows-quotes.p.rapidapi.com'
        }
    };

    var img = document.getElementById("img");
    var h2 = document.getElementById("h2");
    var quote = document.getElementById("quote");
    // var quotes = document.getElementById("quotes")
    fetch(url, options).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data)
        if (data == "No quotes exists for given show!") {
			var p = document.createElement("p");
            quote.appendChild(p);
            p.textContent = "no quote for this movie"
		} else {
            for (let i = 0; i < data.length; i++) {
                // quotes.textContent = element.quote + "  ~" + element.character
                const element = data[i];
                var p = document.createElement("p");
                quote.appendChild(p);
                p.textContent = element.quote + "  ~" + element.character;
            }

        }
    })

    event.preventDefault;
    console.log(search.value);
    const posterurl = 'http://www.omdbapi.com/?t=' + search.value + '&apikey=b084d09a'


    fetch(posterurl).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
        img.src = data.Poster
        h2.textContent = data.Title

    })


}
