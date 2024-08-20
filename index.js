let Myname = "manish";
let age = "22";
const awesome = "True";

console.log(Myname);  // Prints "manish"
console.log(age);     // Prints "22"
console.log(awesome); // Prints "True"

Myname = "Manish Kharel 123True";
age = 22.5;
Myname = 100;
console.log(Myname);  // Prints 100 (not "Myname")

let webtechnology;

console.log(webtechnology);  // Prints undefined

webtechnology = 900;
console.log(webtechnology);  // Prints 900

webtechnology = null;
console.log(webtechnology);  // Prints null

webtechnology = undefined;
console.log(webtechnology);  // Prints undefined

const a = 100;
const b = 222;

const c = a + b;
console.log(c); // Prints 322
const d = b - a;
console.log(d); // Prints 122
const e = a * b;
console.log(e); // Prints 22200
const f = b / a;
console.log(f); // Prints 2.22
const g = a % b;
console.log(g); // Prints 100

const h = "hello";
const j = "world";
const k = h + j;
console.log(k); // Prints "helloworld"

const i = a + h;
console.log(i); // Prints "100hello"

const l = undefined + h;
console.log(l); // Prints "undefinedhello"

console.log(1 + "1"); // Prints "11"

let m = 5;
m = m + 99;
console.log(m); // Prints 104

/**
 * Logical operators
 */

let n = 10;
const o = "10";
const r = n == 0;
console.log(r); // Prints false
const s = n === o;
console.log(s); // Prints false (strict equality, different types)

const t = n !== o;
console.log(t); // Prints true

const v = 20;
console.log(n > v);  // Prints false
console.log(n < v);  // Prints true
console.log(n >= v); // Prints false
console.log(n <= v); // Prints true

/**
 * Logical operators
 */
let w = true;
let x = false;
const p = w && x;
const q = w || x;
console.log(p); // Prints false
console.log(q); // Prints true

const y = !w;
console.log(y); // Prints false

console.log(!false);    // Prints true
console.log(!true);     // Prints false
console.log(!100);      // Prints false (100 is truthy)
console.log(!null);     // Prints true (null is falsy)
console.log(!undefined);// Prints true (undefined is falsy)

/*
Conditional statements
*/
let aa = 100;
const ab = 50;

// If-Else statements
if (aa > ab) {
    console.log("a is greater"); // This will print
} else {
    console.log("ab is greater");
}

// Switch case statements
aa = ""; // Changed to string for testing
switch (aa) {
    case 100:
        console.log("value is 100");
        break;
    case 200:
        console.log("value is 200");
        break;
    default:
        console.log("value is nothing"); // This will print
        break;
}

/**
 * Arrays 
 */
const ac = ["Ram", "Hari", "man"];
console.log(ac);      // Prints the entire array
console.log(ac[0]);   // Prints "Ram"
console.log(ac[1]);   // Prints "Hari"

/**
 * Loops
 */

// For loop
for (let i = 0; i < ac.length; i++) {
    console.log(i);      // Prints index
    console.log(ac[i]);  // Prints corresponding array element
}

// While loop
let ad = 1;
while (ad < 10) {
    console.log("the value of ad is");
    console.log(ad); // Prints the value of ad from 1 to 9
    ad++;
}

// Do-while loop
let ae = 1;
do {
    console.log("value of ae is");
    console.log(ae); // This will print only once because ae is initially 1 and the condition fails after increment
    ae++;
} while (ae < 1 && ae < 10);
