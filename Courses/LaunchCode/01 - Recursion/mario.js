
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    //console.log("Uh oh... the pyramid is under construction.");
    //console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
	let h = height, block = "##", spacing = "    ";
	
	for (let number = 1; number <= 5; number = number + 1) {
	  console.log(spacing + block);
	  block += "#";
	  spacing = spacing.slice(1, (5-number));
	}
}
