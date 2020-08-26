let button = null;
let paragraph = null;
let missionAbort = null;

function init () {
    missionAbort = document.getElementById("abortMission");
    button = document.getElementById("liftoff");
    paragraph = document.querySelector("p");

    // Put your code for the exercises here.

    //change text when launched
    button.addEventListener("click", function() {
        paragraph.innerHTML = "Houston, we have liftoff";
    })

    //turn the button red when the mouse comes over
    missionAbort.addEventListener("mouseover", function() {
        document.getElementById("abortMission").style.backgroundColor = "red";
    });

    //revert the button when the mouse leaves
    missionAbort.addEventListener("mouseout", function() {
        document.getElementById("abortMission").style.backgroundColor = "";
    });

    //add alert confirmation window when abort button clicked
    missionAbort.addEventListener("click", function() {
        window.alert("Do you really want to abort mission?");
    });
}

window.onload = init;