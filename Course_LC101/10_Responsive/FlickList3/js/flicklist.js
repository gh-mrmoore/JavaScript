var model = {
  watchlistItems: [],
  browseItems: []
}


var api = {

  root: "https://api.themoviedb.org/3",
  token: "8635a9331ce7ad7cbe506004d34f79e9", // TODO put your api key here

  /**
   * Given a movie object, returns the url to its poster image
   */
  posterUrl: function(movie) {
    // TODO 4b
    // implement this function
    var base_URL = "http://image.tmdb.org/t/p/w185/";
    var moviePath = movie.poster_path;
    var posterPath = base_URL + moviePath;

    return posterPath


    //return "http://images5.fanpop.com/image/photos/25100000/movie-poster-rapunzel-and-eugene-25184488-300-450.jpg"
  }
}


/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, updates the model.browseItems appropriately, and then invokes
 * the callback function that was passed in
 */
function discoverMovies(callback) {
  $.ajax({
    url: api.root + "/discover/movie",
    data: {
      api_key: api.token
    },
    success: function(response) {
      model.browseItems = response.results;
      callback(response);
      console.log(response);
    }
  });
}


/**
 * Makes an AJAX request to the /search endpoint of the API, using the 
 * query string that was passed in
 *
 * if successful, updates model.browseItems appropriately and then invokes
 * the callback function that was passed in
 */
function searchMovies(query, callback) {
  $.ajax({
    url: api.root + "/search/movie",
    data: {
      api_key: api.token,
      query: query
    },
    success: function(response) {
      model.browseItems = response.results;
      callback(response);
    }
  });
}


/**
 * re-renders the page with new content, based on the current state of the model
 */
function render() {

  // clear everything
  $("#section-watchlist ul").empty();
  $("#section-browse ul").empty();

  // insert watchlist items
  model.watchlistItems.forEach(function(movie) {
    var title = $("<h6></h6>").text(movie.original_title);

    var watchedButton = $("<button></button>")
      .text("Watched It!")
      .click(function() {
        var movieIndex = model.watchlistItems.indexOf(movie);
        model.watchlistItems.splice(movieIndex, 1);
        render();
      })
      .attr("class", "btn btn-danger")

    var posterImage = $("<img>").attr("src", api.posterUrl(movie));

    // TODO 2g
    // re-implement the li as a bootstrap panel with a heading and a body
    var itemView = $("<li></li>")
      .append(posterImage)
      .append(title)
      .append(watchedButton)
      .attr("class", "item-watchlist");
      

    $("#section-watchlist ul").append(itemView);
  });

  // insert browse items
  model.browseItems.forEach(function(movie) {

    // TODO 2d continued
    // style this list item to look like the demo
    // You'll also need to make changes in index.html.
    // use the following BS classes:
    // "list-group", "list-group-item", btn", "btn-primary", 

    var title = $("<h4></h4>").text(movie.original_title);
    

    var button = $("<button></button>")
      .text("Add to Watchlist")
      .click(function() {
        model.watchlistItems.push(movie);
        render();
      })
      .attr("class", "btn btn-primary")
      .prop("disabled", model.watchlistItems.indexOf(movie) !== -1);

    var overview = $("<p></p>").text(movie.overview);

    var posterImage = $("<img>").attr("src", api.posterUrl(movie));

    // append everything to itemView, along with an <hr/>
    var itemView = $("<li></li>")
      .append(posterImage)
      .append(title)
      .append(overview)
      .append(button);
      
    // append the itemView to the list
    $("#section-browse ul").append(itemView);
  });
  
}


// When the HTML document is ready, we call the discoverMovies function,
// and pass the render function as its callback
$(document).ready(function() {
  discoverMovies(render);
});