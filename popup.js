function changeHTML(movie, movie_details){
	if(movie_details.imdbRating !== "undefined"){
		movie.innerHTML =movie_details.Title + " [IMDB - " + movie_details.imdbRating + "]";
	}
	else{
		movie.innerHTML = " [IMDB - N/A]";		
	} 
}

chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  //document.getElementById("status").innerHTML = selection[0];
  var place = document.getElementById("movie_name");
  var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
 		if (xhttp.readyState == 4 && xhttp.status == 200) {
 			response_object = JSON.parse(xhttp.responseText);
 			console.log(response_object);
 			changeHTML(place, response_object);
		}
	};
	if(selection[0].length > 0){
		xhttp.open("GET", "https://www.omdbapi.com/?t="+selection[0], true);
		xhttp.send();
	}
	else{
		place.innerHTML = "Highlight a movie name";
	}
});





