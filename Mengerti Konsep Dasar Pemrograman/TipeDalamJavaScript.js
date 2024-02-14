let score;
console.log(typeof(score)); // undefined

let age = 24;
console.log(typeof(age)); // number

let height = 165.3;
console.log(typeof(height)) // number

// Aritmatika di dalam number
let a = 7; 
let b = 5;

console.log(a + b); // 12
console.log(a - b); // 2
console.log(a * b) // 35
console.log(a / b) // 1.4
console.log(a % b) // 2

// Increment dan Decrement
let scoreIncDec = 5;
scoreIncDec++; // increment
console.log(scoreIncDec); // 6

scoreIncDec--; // decrement
console.log(scoreIncDec); // 5

// string
let name = "Dicoding"
console.log(typeof(name)) // string
console.log(name) // Dicoding

// Tanda kutip dalam String
let anotherName = 'Dicoding Indonesia';
console.log(anotherName); // Dicoding Indonesia

// Tanda Kutip bersamaan
const question = '"What do you think of JavaScript?" he asked';
console.log(question);

// Escape String (\)
const answer = '"I think it\'s great!" I answered';
console.log(answer);

// boolean
let x = true;
let y = false;
console.log(typeof(x)) // boolean
console.log(typeof(y)) // boolean

const c = 10;
const d = 12;
let isGreater = c > d;
let isLess = c < d;

console.log(isGreater); // false
console.log(isLess); // true

// null
let someLaterData = null;
console.log(someLaterData); // null