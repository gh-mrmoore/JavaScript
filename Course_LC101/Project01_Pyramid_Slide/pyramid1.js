//get the height from the user

//get the character from the user
function findChar() {
    var pyChar = document.getElementById("p_character");
    var pyCharValue = pyChar.options[pyChar.selectedIndex].value;

    return pyCharValue;
}

//draw the new pyramid
function drawPyramid() {
    //clear any previous output
    document.getElementById("draw_pyramid").innerHTML = "";

    pyHeight = parseInt(document.getElementById("p_height").value);
    pyChar = findChar();

    //create each row
    for (var row = 0; row < pyHeight; row++) {
        var brickCount = row + 2;
        var spaceCount = pyHeight - row - 1;

        var rowContent = "";
        for (var x = 0; x < spaceCount; x++) {
            var nbspChar = "&nbsp;"
            rowContent += nbspChar;
        }

        for (var y = 0; y < brickCount; y++) {
            rowContent += pyChar;
        }

        //create the pyramid rows and add them to the output div
        pyRow = document.createElement("p");
        pyRow.innerHTML = rowContent;

        document.getElementById("draw_pyramid").appendChild(pyRow);
    }
}