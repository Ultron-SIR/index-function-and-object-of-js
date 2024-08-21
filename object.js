const myName = "Ultron";
const myAge = 22;
const myProfession = "student"; // Changed to singular

// This is an object
const aboutMe = {
    name: "Ultron",
    age: 22,
    myProfession: "student", // Changed to singular
    hair: {
        color: "grey and brown",
        straight: false, // 'false' should be in lowercase
    },
    isFree: (time) => { // Added 'time' as a parameter
        if (time > 10) {
            return true;
        } else {
            return false; // 'false' should be in lowercase
        }
    }
};

console.log(aboutMe.name);
console.log(aboutMe.age);
// Accessing nested value
console.log(aboutMe.hair.color); 
// Calling function with argument
console.log(aboutMe.isFree(11));

// Mutation
// 'aboutMe' cannot be reassigned, but its properties can be
aboutMe.age = 23; // Changed age to a number instead of a string
console.log(aboutMe.age);

// Adding a new property
aboutMe.hobbies = ["gaming"];
console.log(aboutMe.hobbies); // Corrected to 'aboutMe.hobbies'

// Deleting a property
console.log(aboutMe);
delete aboutMe.hair;
console.log(aboutMe.hair); // This will return 'undefined' since 'hair' has been deleted


//array ofobjects
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
    console.log(books[0])
    console.log([price])
