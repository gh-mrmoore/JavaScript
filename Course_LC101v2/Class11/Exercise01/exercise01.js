/*
Exercises: Classes
Welcome to the space station! It is your first day onboard and as the newest and most junior member of the crew, you have been asked to organize the library of manuals and fun novels for the crew to read.

Headquarters have asked that you store the following information about each book:
The title
The author
The copyright date
The ISBN
The number of pages
The number of times the book has been checked out.
Whether the book has been discarded.

Headquarters also needs you to track certain actions that must be performed when books get out of date. First, for a manual, the book must be thrown out if it is over 5 years old. 
Second, for a novel, the book should be thrown out if it has been checked out over 100 times.

Part 1:
Construct three classes that hold the information needed by headquarters as properties. Also, each class needs two methods that update the book’s property if the book needs to be discarded. 

One class should be a Book class and two child classes of the Book class called Manual and Novel. 

Hint: This means you need to read through the requirements for the problem and decide what should belong to Book and what should belong to the Novel and Manual classes.

Part 2:
Declare two objects, one from the Novel class and one from the Manual class.

To see the list of data that must be added to each object, refer to the information given in the book instructions: https://education.launchcode.org/intro-to-professional-web-dev/chapters/classes/exercises.html.

Part 3:
One of the above books needs to be discarded. Call the appropriate method for that book to update the property. That way the crew can throw it into empty space to become debris.

The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number of times the book has been checked out.
*/

class Book {
    constructor(title, author, copyright, isbn, pageCount) {
        //constructor properties
        this.bookTitle = title;
        this.bookAuthor = author;
        this.bookCopyrightDate = copyright;
        this.bookIsbn = isbn;
        this.bookPageCount = pageCount;
    }
    //class methods
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pageCount, checkoutCount) {
        super(title, author, copyright, isbn, pageCount);
        //constructor properties
        this.countCheckouts = checkoutCount;
    }
    //class methods
    tooManyCheckouts() {
        if (this.countCheckouts > 100) {
            return "Discard, too worn.";
        } else {
            return "Do NOT discard, still some life left.";
        }
    }

    updatedCheckoutCount(checkouts) {
        this.countCheckouts = this.countCheckouts + checkouts;
        return this.countCheckouts;
    }
}

class Manual extends Book {
    constructor(title, author, copyright, isbn, pageCount) {
        super(title, author, copyright, isbn, pageCount);
        //constructor properties
    }
    //class methods
    tooOld() {
        if (this.bookCopyrightDate < 2015) {
            return "Discard, too old";
        } else {
            return "Do NOT discard, still relevant."
        }
    }
}

let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32);
console.log(prideAndPrejudice);
console.log(prideAndPrejudice.updatedCheckoutCount(5));
console.log(prideAndPrejudice.tooManyCheckouts());

let secretShuttleBuilding = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1);
console.log(secretShuttleBuilding);
console.log(secretShuttleBuilding.tooOld());

