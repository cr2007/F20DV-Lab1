"use strict"; // to prevent us from overwriting important variables

const c = "constant"; // a constant value, assignment to c is no longer allowed

let v = "variable"; // a primitive variable

let a = [1, 2, 3, false]; // an array

let o = {
	// an object
	key1: 1,
	key2: "something",
};

console.log(c);
console.log(v);
console.log(a);
console.log(o);
console.log(o["key2"]);
console.log(o.key2);

/****** Functions ******/

// Normal function
function one(a, b = 6) {
	return a + b;
}

// Function as variable
let two = function (a, b) {
	return a + b;
};

// Arrow Function
let three = (a, b) => a + b;

o["key3"] = two;

/***** Modules *****/

import { GCD } from "./math.js";

console.log(GCD(84, 52));

import { factorial as myFactorial } from "./math.js";

console.log(myFactorial(5));

/****** Classes ******/

import Book from "./Book.js";

// Instantiate several books
let book1 = new Book("The Hobbit", "J.R.R. Tolkien");
let book2 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien");
let book3 = new Book("The Two Towers", "J.R.R. Tolkien");

// Check if books are available
console.log(`Book 1: ${book1.available}`); // true
console.log(`Book 2: ${book2.available}`); // true
console.log(`Book 3: ${book3.available}`); // true

// Loan out book1
book1.loan();
console.log(book1.available); // false

// Return book1
book1.return();
console.log(book1.available); // true
