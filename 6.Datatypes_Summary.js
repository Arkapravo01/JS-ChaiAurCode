//Datatypes Summary

//Primitive
//7 types: 1)String 2)Number 3)Boolean 4)Null 5)Undefined 6)Symbol 7)BigInt

//Reference Type(Non Primitive)
//1)Array 2)Objects 3)Functions

//Js is dynamically typed
//typeof null is->object
//typeof function->function
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id1 = Symbol("123");
const id2 = Symbol("123");
console.log(id1 === id2);

let bigNum = 3456798345684995868;
console.log(typeof bigNum);

const heroes = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "Hitesh",
  age: 22,
};

const myFunction=function() {
    console.log('Hello World');
}

myFunction()


//Memories-Stack (Primiive) and Heap (Non-Primitive)

let myYtName='hiteshchoudharydotcom'
let anotherName = myYtName
anotherName = 'chaiaurcoode'

console.log(myYtName);
console.log(anotherName);

let user1 = {
    email: 'user@google.com',
    upi:'user@ybl'
}
let user2 = user1
user2.email='arka@gmail.com'
console.log(user1.email);
console.log(user2.email);





