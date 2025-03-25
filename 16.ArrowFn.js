const user = {
  username: "Hitesh",
  price: 999,
  welcomemessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// Global object in dom is window in Node its empty {}

// user.welcomemessage();
// user.username = "Sam";
// user.welcomemessage();

console.log(this);

function chai() {
  let username = "Hitesh";
  console.log(this.username);
}
chai();

const chai1 = () => {
  let n = "Arka";
  console.log(this);
};
chai1();

const add2 = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({user:'Hitesh'});

console.log(addTwo(3, 4));

// const myArray=[2,3,4,5,6]
// myArray.forEach(()=>())

