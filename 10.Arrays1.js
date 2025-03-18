const myArr1=[1,2,3,4,5]
const myArr2 = myArr1
myArr2[2]='Arka'
console.log(myArr2);
console.log(myArr1);

const myHeroes=['shaktiman','nagraj']
const myArr3=new Array(1,2,3,4)
console.log(myArr3);

//Array Methods
const arr1 = [1, 2, 3, 4, 5];

// arr1.push(6)
// arr1.push(7)
// arr1.pop()

// arr1.unshift(69)
// arr1.shift()

// console.log(arr1.includes(5));
// console.log(arr1.indexOf(3));

const newArr=arr1.join()
console.log(arr1);
console.log(newArr);

//Slice Splice
console.log('A ',myArr1);
const myn1=myArr1.slice(1,3)

console.log(myn1);
console.log('B ',myArr1);

const myn2=myArr1.splice(1,3)
console.log(myn2);
console.log('C ',myArr1);
