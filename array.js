let simpleArray = ["Ultron", "Sir"];

console.log(simpleArray);

// Pushing a single element
simpleArray.push("Manish"); 
console.log(simpleArray);

// Pushing multiple elements
simpleArray.push("manish", "Kharel");
console.log(simpleArray);

// Popping elements
let poppedElement = simpleArray.pop();
console.log(simpleArray);
console.log("Popped element is", poppedElement);

// Shifting elements
let shiftedElement = simpleArray.shift(); // Added declaration of shiftedElement
console.log(simpleArray);
console.log("Shifted element is", shiftedElement);

// Unshifting element
simpleArray.unshift("Jonny", "Leo");
console.log(simpleArray);

// Includes - return true or false
const doesIncludeJonny = simpleArray.includes("Jonny"); // Fixed variable name
console.log("Includes Jonny?", doesIncludeJonny);

const doesIncludePapa = simpleArray.includes("Papa");
console.log("Includes Papa?", doesIncludePapa);

// Callback function
function callsYouBack(Ultron){
    const a = "hello";
    Ultron("Lets");
    Ultron("Meet");
    Ultron("Tomorrow");
}
function callbackedFunction(a) { // Corrected the function name to match the call
    console.log(a);
}

callsYouBack(callbackedFunction); // Corrected function name

console.log("--------------"); // Fixed typo (console.loh)

// forEach method
simpleArray.forEach(function (x){
    console.log(x);
});

let nayaString = "";
simpleArray.forEach(function(x, i){     // x is the elements, i is the index
    nayaString = nayaString + x + i;
});
console.log(nayaString);

const nayaArray = ["b", "a", "z", "x"]; // Changed to array initialization syntax
nayaArray.sort();
console.log(nayaArray);

// Sorting in descending order
nayaArray.sort((a, b) => b.localeCompare(a)); // Used localeCompare for descending order
console.log(nayaArray);

// map method
const numberArray = [1, 2, 3, 5];
const mapped = numberArray.map((x) =>{
    return x * x;
});
console.log(mapped);    // Prints the square of every number

// reduce method 
const sumOfArray = numberArray.reduce((a, b) => {   // Added sumOfArray to store result
    return a + b;
}, 0); // 0 is the initial value
console.log(sumOfArray); // Prints the sum of the array

/**
 * iteration 1: 0, 1 (initial value and first element)
 * iteration 2: 1, 2 (first and second elements)
 * ...
 */

const found = numberArray.filter((a) => {  // Changed `f` to `found`
    return a % 2 == 0;
});
console.log(found); // Prints the elements that are even

// forEach with array of objects
const books = [
    {
        name: "github",
        price: 2500
    },
    {
        name: "it ends with us",
        price: 20
    },
];
books.forEach((book) => {  // Fixed parameter name to match object properties
    console.log(book.price); // Corrected syntax to access price
    book.name = "It starts with us"; // Modified the `name` property
});
console.log(books);


    // create a program that takes an array of book objects and return a new array of booksname using ,map

    const bookNames =books.map ((book) =>{
        return book.name;
    });
    console.log(bookNames);

    /**
     * create a program that takes an array of book object and adds a new property 'pages' using .map()
     */

        



