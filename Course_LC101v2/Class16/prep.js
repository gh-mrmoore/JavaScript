const fetchPromise = fetch("https://handlers.education.launchcode.org/static/weather.json");
fetchPromise.then( function(response) {
   const jsonPromise = response.json();
   jsonPromise.then( function(json) {
      console.log("temp", json.temp);
   });
} );