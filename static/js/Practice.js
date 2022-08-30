// Printing a string with JavaScript
console.log("Hello, world!");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
}

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
}

// Call the function and print to the console
console.log(addition(4,5));

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}

// Inpute 65 and 34
console.log(doubleAddition(65, 34));

// Note: Use ctrl + L to clear console window using Chrome

// Standard function
let square = function (num) {
    return num ** 2;
}

console.log(square(2));

// Fat arrow function
let square2 = (num) => num**2;
console.log(square(2))

// Addition function converted to an arrow function
addition = (a, b) => a + b;

// doubleAddition function as an arrow function
doubleAddition = (c, d) => addition(c,d) * 2;

// Add an array to console
let friends = ["Sarah", "Greg", "Cindy", "Jeff"]

// Create a for loop that will print the names one after the other in the console
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}

// Pass the friends array into listLoop
listLoop(friends);

// Create a vegetables array
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// For loop to print a statement with each vegetable
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// For loop that counts 0 to 4
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
}

// Using forEach on an array
let numbers = [1,2,3,4,5,6];
numbers.forEach(function (element) {
    console.log(element**2);
})