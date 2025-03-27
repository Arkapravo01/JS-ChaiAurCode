//if
const isUserLoggedIn = true;
const temperature = 41;
if (temperature < 50) {
  console.log("Less than 50");
} else {
  console.log("Greater than 50");
}

if (2 == "2") {
  console.log("Executed");
} else {
  console.log("Not Executed");
}

// const score=200

// if(score>100){
//     let power="fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


const balance = 100;

// balance>500 ? console.log('Test') : console.log('Not test');

if(balance>500){
    console.log("Less than");
}else if(balance<750){
    console.log("Less than 750");
}else if(balance<900){
    console.log("Less than 900");
}else{
    console.log("Less than 1200");
}

const userLoggedIn=true 
const debitCard=true 
const loggedInFromGoogle=false 
const loggedInFromEmail=true 

if (userLoggedIn && debitCard && 2===3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
  console.log("User logged in");
}
