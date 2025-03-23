function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

sayMyName();

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const res = addTwoNumbers(3, 5);
// console.log("Result:",res);

const loginUserMessage = (username = "sam") => {
  if (!username) {
    console.log("Please enter a username!");
    return;
  }
  return `${username} just logged in!`;
};

let name = loginUserMessage("Hitesh");
console.log(name);

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "Hitesh",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);
handleObject({ username: "Sam", price: 199 });

const myNewArr = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArr));
