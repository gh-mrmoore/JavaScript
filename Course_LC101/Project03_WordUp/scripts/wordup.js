

// ----------------- MODEL -----------------

var GAME_DURATION = 30;

// all the stuff we need to keep track of
var model = {
    // a boolean indicating whether the (first) game has started yet
    gameHasStarted: false,

    // how much time is left in the current game
    secondsRemaining: GAME_DURATION,

    // a list of the 7 letters that the player is allowed to use
    allowedLetters: [],

    // the word that the user is currently typing
    currentAttempt: "",

    // a list of the words the user has previously submitted in the current game
    wordSubmissions: []
}

/*
 * Resets the model to a starting state, and then starts the timer
 */
function startGame() {
    endGame();
    model.gameHasStarted = true;
    model.secondsRemaining = GAME_DURATION;
    model.allowedLetters = generateAllowedLetters();
    model.wordSubmissions = [];
    model.currentAttempt = "";
    model.timer = startTimer();
}

/*
 * Wraps things up
 */
function endGame() {
    stopTimer();
}


/**
 * Given a word, adds a new wordSubmission to model.wordSubmissions.
 *
 * Refrains from adding a new entry if the model already contains
 * a wordSubmission whose word is the same
 */
function addNewWordSubmission(word) {
    // Do we already have a wordSubmission with this word?
    // (DONE) TODO 21 - replace the hardcoded 'false' with the real answer
    var alreadyUsed = false;
    model.wordSubmissions.forEach(function(usedObject) {
        if (word == usedObject.word) {
            return alreadyUsed = true;
        }
    });


    // if the word is valid and hasn't already been used, add it
    if (containsOnlyAllowedLetters(word) && alreadyUsed == false) {
        model.wordSubmissions.push({ word: word });
        // and now we must also determine whether this is actually a real word
        checkIfWordIsReal(word);
    }
}

/**
 * Given a word, checks to see if that word actually exists in the dictionary.
 *
 * Subsequently updates the .isRealWord property of
 * the corresponding wordSubmission in the model, and then re-renders.
 */
function checkIfWordIsReal(word) {

    // make an AJAX call to the Pearson API
    $.ajax({
        // (DONE) TODO 13 what should the url be?
        url: "https://api.pearson.com/v2/dictionaries/lasde/entries?headword=" + word,
        success: function(response) {
            //console.log("We received a response from Pearson!");

            // let's print the response to the console so we can take a looksie
            //console.log("Pearson response: ", response);

            // (DONE) TODO 14
            // Replace the 'true' below.
            // If the response contains any results, then the word is legitimate.
            // Otherwise, it is not.
            if (response.results.length > 0) {
                //console.log("This is a word");
                var theAnswer = true;
            } else {
                //console.log("This is not a word");
                var theAnswer = false;
            }
            

            // (DONE) TODO 15
            // Update the corresponding wordSubmission in the model
            model.wordSubmissions.forEach(function(wordObject) {
                if (word == wordObject.word) {
                    console.log(wordObject.word);
                    wordObject.isRealWord = theAnswer;
                }
            });

            // re-render
            render();
        },
        error: function(err) {
            console.log(err);
        }
    });
}


// ----------------- VIEW -----------------

/**
 * Updates everything on screen based on the current state of the model
 */
function render() {

    // PREGAME ---------------------------------

    // update the score on the scoreboard
    $("#current-score").text(currentScore());

    // (DONE) TODO 2 - Update the curent time remaining on the scoreboard.
    $("#time-remaining").text(model.secondsRemaining);


    // if the game has not started yet, just hide the #game container and exit
    if (model.gameHasStarted == false) {
        $("#game").hide();
        return;
    }

    // GAME -------------------------------------

    // clear stuff
    $("#allowed-letters").empty();
    $("#word-submissions").empty();
    // (DONE) TODO 10 - Add a few things to the above code block (underneath "// clear stuff").
    $("#textbox").prop("disabled", false);
    $("#textbox").removeClass("bad-attempt");
    $(".disallowed-letter").remove();



    // reveal the #game container
    $("#game").show();

    // render the letter tiles
    var letterChips = model.allowedLetters.map(letterChip);
    $("#allowed-letters").append(letterChips);

    // (DONE) TODO 11 - Render the word submissions
    var wordsChips = model.wordSubmissions.map(wordSubmissionChip);
    $("#word-submissions").append(wordsChips);


    // Set the value of the textbox
    $("#textbox").val(model.currentAttempt).focus();
    // (DONE) TODO 3 - Give focus to the textbox.


    // if the current word attempt contains disallowed letters,
    var disallowedLetters = disallowedLettersInWord(model.currentAttempt);
    if (disallowedLetters.length > 0) {
        // restyle the textbox
        $("#textbox").addClass("bad-attempt");

        // show the disallowed letters underneath
        var redLetterChips = disallowedLetters.map(disallowedLetterChip);

        // (DONE) TODO 8 - append the red letter chips to the form
        $("#word-attempt-form").append(redLetterChips);

    }

    // if the game is over
    var gameOver = model.secondsRemaining <= 0
    if (gameOver) {
        // (DONE) TODO 9 - disable the text box and clear its contents
        $("#textbox").prop("disabled", true);
        $("#textbox").val("");
    }
}


/**
 * Given a letter, returns an HTML element which can be used to display
 * the letter as a large "chip" above the text box
 */
function letterChip(letter) {
    // a chip to display the letter
    var letterChip = $("<span></span>")
        .text(letter)
        .attr("class", "tag tag-lg allowed-letter")

    // a smaller chip to indicate how many points this letter is worth
    var scoreChip = $("<span></span>")
        .text(letterScore(letter))
        .attr("class", "tag tag-default tag-sm");

    return letterChip.append(scoreChip);
}

/**
 * Given a wordSubmission, returns an HTML element which can be used to display
 * the word as a large white "chip" below the text box.
 */
function wordSubmissionChip(wordSubmission) {
    var wordChip = $("<span></span>")
        .text(wordSubmission.word)
        .attr("class", "tag tag-lg word-submission");

    // if we know the status of this word (real word or not), then add a green score or red X
    if (wordSubmission.hasOwnProperty("isRealWord")) {
        var currentWordScore = wordScore(wordSubmission.word);
        //console.log("Score for word: ", wordSubmission.word, " is ", currentWordScore);
        // (DONE) TODO 17 - give the scoreChip appropriate text content
        var scoreChip = $("<span></span>").text(currentWordScore);

        // (DONE) TODO 18 - give the scoreChip appropriate css classes
        if (wordSubmission.isRealWord) {
            scoreChip.attr("class", "bg-primary tag-sm text-white");
        } else {
            scoreChip.attr("class", "bg-danger tag-sm text-white");
        }

        // (DONE) TODO 16 - append scoreChip into wordChip
        wordChip.append(scoreChip)

    }

    return wordChip;
}

/**
 * Given a disallowed letter, returns a DOM element to display the letter
 * little red chip to display the letter
 */
function disallowedLetterChip(letter) {
    return $("<span></span>")
        .text(letter)
        .addClass("tag tag-sm tag-danger disallowed-letter");
}


// ----------------- DOM EVENT HANDLERS -----------------

$(document).ready(function() {
    // when the new game button is clicked
    $("#new-game-button").click(function() {
        // start the game and re-render
        startGame();
        render();
    });

    // (DONE) TODO 6
    // Add another event handler with a callback function.
    // When the textbox content changes,
    // update the .currentAttempt property of the model and re-render
    $("#textbox").on("input", function() {
        //console.log($(this).val());
        model.currentAttempt = $(this).val();
    })


    // when the form is submitted
    $("#word-attempt-form").submit(function(evt) {
        // we don't want the page to refresh
        evt.preventDefault();

        // add a new word from whatever they typed
        addNewWordSubmission(model.currentAttempt);

        // clear away whatever they typed
        model.currentAttempt = "";

        // re-render
        render();
    });

    // initial render
    render();
});


// ----------------- GAME LOGIC -----------------

// borrowing Scrabble's point system
var scrabblePointsForEachLetter = {
    a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3,
    n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
}

/**
 * Given a letter, checks whether that letter is "disallowed"
 * meaning it is not a member of the .allowedLetters list from the current model
 */
function isDisallowedLetter(letter) {
    // (DONE) TODO 7
    // This should return true if the letter is not an element of
    // the .allowedLetters list in the model
    if (model.allowedLetters.indexOf(letter) == -1) {
        //console.log("You typed a disallowed letter");
        return true;
    } else {
        //console.log("You typed an allowed letter");
        return false;
    }
}

/**
 * Given a word, returns a list of all the disallowed letters in that word
 * Note that the list might be empty, if it contains only allowed letters.
 */
function disallowedLettersInWord(word) {
    //console.log("Disallowed letters received: ", word);
    letters = word.split("");
    return letters.filter(isDisallowedLetter);
}

/**
 * Given a word, returns true if the word is "clean",
 * i.e. the word does not contain any disallowed letters
 */
function containsOnlyAllowedLetters(word) {
    // (DONE) TODO 12 - Return the actual answer.
     if (disallowedLettersInWord(word) == false) {
         //console.log("Disallowed letter or letters in word");
        return true;
     } else {
         return false;
     }
    
}

/**
 * Returns a list of 7 randomly chosen letters
 * Each letter will be distinct (no repeats of the same letter)
 */
function generateAllowedLetters() {
    return chooseN(7, Object.keys(scrabblePointsForEachLetter));
}

/**
 * Given a letter, returns the score of that letter (case-insensitive)
 */
function letterScore(letter) {
    return scrabblePointsForEachLetter[letter.toLowerCase()];
}

/**
 * Given a word, returns its total score,
 * which is computed by summing the scores of each of its letters.
 *
 * Returns a score of 0 if the word contains any disallowed letters.
 */
function wordScore(word) {
    // split the word into a list of letters
    var letters = word.split("");

    // (DONE) TODO 19
    // Replace the empty list below.
    // Map the list of letters into a list of scores, one for each letter.
    var letterScores = letters.map(letterScore);

    // return the total sum of the letter scores
    return letterScores.reduce(add, 0);
}


/**
 * Returns the user's current total score, which is the sum of the
 * scores of all the wordSubmissions whose word is a real dictionary word
 */
function currentScore() {
    // a list of scores, one for each word submission
    var wordScores = model.wordSubmissions.map(function(submission) {
        if (submission.isRealWord) {
            return wordScore(submission.word);
        }
        else {
            return 0;
        }
    });

    // (DONE) TODO 20
    // return the total sum of the word scores
    console.log(wordScores);
    return wordScores.reduce(add, 0);
}


// ----------------- UTILS -----------------

/**
 * Randomly selects n items from a list.
 * Returns the selected items together in a (smaller) list.
 */
function chooseN(n, items) {
    var selectedItems = [];
    var total = Math.min(n, items.length);
    for (var i = 0; i < total; i++) {
        index = Math.floor(Math.random() * items.length);
        selectedItems.push(items[index]);
        items.splice(index, 1);
    }
    return selectedItems;
}

/**
 * Adds two numbers together
 */
function add(a, b) {
    return a + b;
}


// ----------------- THE TIMER -----------------

// don't waste your brain power trying to understand how these functions work.
// just use them

/*
 * Makes the timer start ticking.
 * On each tick, updates the .secondsRemaining property of the model and re-renders.
 * Stops when model.secondsRemaining reaches 0.
 */
function startTimer() {
    function tick() {
        return setTimeout(function() {
            model.secondsRemaining = Math.max(0, model.secondsRemaining - 1);
            render();
            var stillTimeLeft = model.gameHasStarted && model.secondsRemaining > 0
            if (stillTimeLeft) {
                model.timer = tick();
            }
        }, 1000);
    }
    return tick();
}

/*
 * Makes the timer stop ticking.
 */
function stopTimer() {
    clearTimeout(model.timer);
}