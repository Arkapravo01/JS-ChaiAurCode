const score=400
console.log(score);

const balance =new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNo=123.8966
console.log(otherNo.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MIN_VALUE);

//++++++++Maths++++++++
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log('Min Max');
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1, 2, 3, 4, 5));
console.log('Random');
console.log(Math.round((Math.random()*100)+1));

const min=10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min);

