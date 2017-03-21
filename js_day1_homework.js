// Section 1

// What types are these?

/* 1.1 */ 1; // NUMBER
/* 1.2 */ "cat"; // STRING
/* 1.3 */ true; // BOOLEAN
/* 1.4 */ []; // ARRAY
/* 1.5 */ {}; // OBJECT
/* 1.6 */ 1.1; // NUMBER
/* 1.7 */ var myVariable; // UNDEFINED


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; // TRUE;
/* 2.2 */ "cat"; // TRUE;
/* 2.3 */ true; // TRUE;
/* 2.4 */ NaN; // FALSE;
/* 2.5 */ []; // TRUE 
/* 2.6 */ {}; // TRUE
/* 2.7 */ undefined; // FALSE;
/* 2.8 */ ""; // FALSE
/* 2.9 */ 0; // FALSE


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number 
var number = 7;

// 3.2 Assign a variable that is a string  
var name = "Chris";

// 3.3 Assign a variable that is a boolean 
(1 < 2) return true

// 3.4 Assign a variable that is an object 
var obj. = {};


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

// Oops, was meant to put something in here!
if(true) console.log("true");
if(false) console.log("false");


// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var firstAnimal = animals[0];

// 5.2. Assign the last element to a variable
var lastAnimal = animals[animals.length -1];

// 5.3. Assign the length of an array to a variable
animals.length; 

// 5.4. Add an item to the end of the array
animals.push("Fox");

// 5.5. Add an item to the start of the array
animals.unshift("Owl");

// 5.6. Assign the index of hedgehog to a variable
animals.indexOf("hedgehog");


// Section 6

// 6.1 Create an array of 5 vegetables  
var vegtables = ["Kale", "Spinach", "Swiss chard", "Artichoke", "Broccoli"];

// 6.2 Loop over the array and write to the console using a "while"
var i = 0;
while (i < myArray.count) {
  console.log(myArray[i]);
  i++;
}

// 6.3 Loop again using a "for" with a counter
for (var i=0; i < count; i++) {
  console.log(myArray[i]);
}

// 6.4 Loop again using a "for of"
for (var key of myArray) {
  console.log // STUCK ON THIS ONE!
}


// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!

// 7.1 Calculate the total cash in accounts
var total = 0
for (var key in accounts) {
  total += accounts[key].amount;
}

console.log(total);

// 7.2 Find the amount of money in the account with the largest balance
// 7.3 Find the name of the account with the smallest balance
// 7.4 Calculate the average bank account value
// 7.5 Find the value of marcs bank account
// 7.6 Find the holder of the largest bank account
// 7.7 Calculate the total cash in business accounts
// 7.8 Find the largest personal account owner

// DIDN'T GET ROUND TO COMPLETING THESE ONES!


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
  name: "Chris",
  height: 6.2,
  favFood: "Paella Valenciana"

  myPerson.eat = function() {
    return this;
  }

  let eat = obj.eat;
  eat(); // GLOBAL OBJECT
