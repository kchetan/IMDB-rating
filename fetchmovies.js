function changeHTML(movie, movie_details){
	if(movie_details.imdbRating != "undefined"){
		movie.innerHTML += " [IMDB - " + movie_details.imdbRating + "]";
	}
	else{
		movie.innerHTML += " [IMDB - N/A]";		
	} 
}

function getIMDBRating(movie){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
 		if (xhttp.readyState == 4 && xhttp.status == 200) {
 			response_object = JSON.parse(xhttp.responseText)
 			changeHTML(movie, response_object)
		}
	};
	xhttp.open("GET", "https://www.omdbapi.com/?t="+movie.innerHTML, true);
	xhttp.send();
}


function getMovies(){
    var movies =  document.getElementsByClassName("name");
    for(var i =0;i<movies.length;i++){
    	getIMDBRating(movies[i]);   
    }
}

getMovies();
