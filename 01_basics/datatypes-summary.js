// primitive data types

// 7 categories 
// String, number, boolean, null, undefinfed, symbol, BigInt

const score = false
const scoreValue = 100.3
// reference type or non primitive

const heros = ["shaktiman", "naagraj", "doga"];

// curly braces mei objects hote hai
let myObj = {
    name: "yash",
    age: 22,
}
// array, objects, functions

const myFuntion = function(){
    console.log("Hello World");
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), heap (Non - primitive)

let myYoutubeName = "yashpathak"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "yashpathak772@gmail.com",
    password: "believe"
}

let userTwo = userOne

userTwo.email = "yashpathak1025@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);