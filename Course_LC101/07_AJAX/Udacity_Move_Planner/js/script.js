
function loadData() {
    console.log("Form submitted");

    //use jQuery objects
    //will be using two different methods
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetString, cityString

    streetString = $('#street').val();
    cityString = $('#city').val();
    combinedString = streetString + ", " + cityString
    googleURL = "http://maps.googleapis.com/maps/api/streetview?size=600x300&key=AIzaSyAD5mG_WJ4-jTW3ifbq0wnE9SbEHmQxEBg&location=";
    finalGoogleString = googleURL + combinedString;
    console.log("Location: " + finalGoogleString);
    $('body').append('<img class="bgimg" src="' + finalGoogleString + '" />');

    //NY Time Request
    //$.getJSON();
    //unable to create app on NY Times web site...

    
    //Wikipedia
    //use jQuery.Ajax()
    //url, dataType, success parameter set to function that runs when working
    /*
    Send JSON-P request with $.ajax()
        include data type and success parameters
    Iterate thru response
    Present articles on the page inside <ul id="wikipedia-links"></ul>
    */



   /*
    At its simplest, the $.ajax() function can be called with no arguments:

   1
   $.ajax();
   Note: Default settings can be set globally by using the $.ajaxSetup() function.
   
   This example, using no options, loads the contents of the current page, but does nothing with the result. To use the result, you can implement one of the callback functions.
   
   The jqXHR Object
   The jQuery XMLHttpRequest (jqXHR) object returned by $.ajax() as of jQuery 1.5 is a superset of the browser's native XMLHttpRequest object. For example, it contains responseText and responseXML properties, as well as a getResponseHeader() method. When the transport mechanism is something other than XMLHttpRequest (for example, a script tag for a JSONP request) the jqXHR object simulates native XHR functionality where possible.
   
   As of jQuery 1.5.1, the jqXHR object also contains the overrideMimeType() method (it was available in jQuery 1.4.x, as well, but was temporarily removed in jQuery 1.5). The .overrideMimeType() method may be used in the beforeSend() callback function, for example, to modify the response content-type header:
   */
   

   $.ajax({
     url: "https://fiddle.jshell.net/favicon.png",   //change to wikipedia
     beforeSend: function( xhr ) {
       xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
     }
   })
     .done(function( data ) {
       if ( console && console.log ) {
         console.log( "Sample of data:", data.slice( 0, 100 ) );
       }
     });
   $.ajax();



    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);

// loadData();
