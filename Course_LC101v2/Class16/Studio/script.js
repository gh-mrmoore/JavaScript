// TODO: add code here

//check for the window to load
window.addEventListener("load", function() {
    //once loaced, fetch some data
    let astronautPromise = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        astronautPromise.then(function(response) {
            let jsonPromise = response.json();
                jsonPromise.then(function(json) {
                    let astronautBio = document.getElementById("container");
                    let allAstronauts = "";

                    for (let i = 0; i < json.length; i++) {
                        let astronautString = `<div class="astronaut">
                                                <div class="bio">
                                                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                                    <ul>
                                                        <li>Hours in space: ${json[i].hoursInSpace}</li>`

                                                        if (json[i].active) {
                                                            astronautString += `<li class="green">Active</li>`
                                                        } else {
                                                            astronautString += `<li class="red">Inactive</li>`
                                                        }

                                                        astronautString+= `<li>Status: ${json[i].active}</li>
                                                        <li>Skills: <ul>`;
                            for (let z = 0; z < json[i].skills.length; z++) {
                                let skillString = `<li>${json[i].skills[z]}</li>`;
                                astronautString += skillString;
                            }
                            astronautString += `</ul>
                                                </div>
                                                    <img class="avatar" src="${json[i].picture}" />
                                                </div>`;
                        allAstronauts += astronautString;
                    }
                    astronautBio.innerHTML = allAstronauts;
                });
            });
});