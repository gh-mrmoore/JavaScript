// Write your JavaScript code here!

//check that the page has loaded before we start doing anything
window.addEventListener('load', function(){
   //let's get some planet data
   const fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json");
      fetchPromise.then( function(response) {
          const jsonPromise = response.json();
             jsonPromise.then( function(json) {
               let missionLocation = document.getElementById('missionTarget');
               //format the json data with html provided
               missionLocation.innerHTML = `<h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[0].name}</li>
                  <li>Diameter: ${json[0].diameter}</li>
                  <li>Star: ${json[0].star}</li>
                  <li>Distance from Earth: ${json[0].distance}</li>
                  <li>Number of Moons: ${json[0].moons}</li>
               </ol>
               <img src="${json[0].image}">
               `;
         });
      });

   // alert("Window loaded");
   let submitForm = document.querySelector("form");
   submitForm.addEventListener('submit', launchFormValidation);
});

//validate form inputs
function launchFormValidation() {
   event.preventDefault();

   // get all my user input
   let enteredPilotName = document.getElementById('pilotName').value;
   let enteredCoPilotName = document.getElementById('copilotName').value;
   let enteredFuelLevel = document.getElementById('fuelLevel').value;
   let enteredCargoMass = document.getElementById('cargoMass').value;

   //run validation checks on my data
   if (enteredPilotName === '') {
      alert("Pilot name required");
   } else if (enteredCoPilotName === '') {
      alert("Co-Pilot name required");
   } else if (isNaN(enteredFuelLevel)) {
      alert("Fuel Level must be entered as a number");
      document.getElementById('fuelLevel').value = enteredFuelLevel;
   } else if (isNaN(enteredCargoMass)) {
      alert("Cargo Mass must be entered as a number");
   } else {
      enteredFuelLevel = Number(enteredFuelLevel);
      enteredCargoMass = Number(enteredCargoMass);
      if (enteredFuelLevel < 10000) {
         alert("Fuel level must be more than 10,000 litres");
      } else if (enteredCargoMass > 10000) {
         alert("Cargo mass must be less than 10,000 kg");
      } else {
         // alert("All data entered, ready to move on?");

         //change the visibility of the faulty items div
         let faultyItemsDiv = document.getElementById('faultyItems');
         faultyItemsDiv.style.visibility = "visible";

         //change the header
         let statusHeader = document.getElementById('launchStatus');
         statusHeader.style.color = 'green';
         statusHeader.innerHTML = "Ready for Launch!";

         //update the pilot's name
         let currentPilotStatus = document.getElementById('pilotStatus');
         currentPilotStatus.style.color = 'green';
         currentPilotStatus.innerHTML = `Pilot ${enteredPilotName} is ready for launch`;
         
         //update the co-pilot's name
         let currentCopilotStatus = document.getElementById('copilotStatus');
         currentCopilotStatus.style.color = 'green';
         currentCopilotStatus.innerHTML = `Co-pilot ${enteredCoPilotName} is ready for launch`;

         //change the color of the other ready-state items
         let readyFuel = document.getElementById('fuelStatus');
         readyFuel.style.color = 'green';
         let readyCargo = document.getElementById('cargoStatus');
         readyCargo.style.color = 'green';
      }
   
   }

};