// singleton
//Object.create

// object literals
const mySym = Symbol("key1");
const jsUser = {
  name: "Hitesh",
  fullName: "Hitesh Choudhary",
  [mySym]:mySym,
  age: 23,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(typeof jsUser[mySym]);


// Object.freeze(jsUser)
jsUser.email='Arka@gmail.com'
console.log(jsUser.email);

jsUser.greeting=function(){
  console.log('Hello Js User');
}
jsUser.greeting2=function(){
  console.log(`Hello Js User,${this.name}`);
}

console.log(jsUser.greeting2());