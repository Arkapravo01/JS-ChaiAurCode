const name='Hitesh'
const repoCount=50

console.log(name + " " + repoCount);
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName=new String('hitesh-hc-com')
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(newString);

const newStringOne="   hitesh   "
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20", "-"));

console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));

