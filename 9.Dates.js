let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate1=new Date("2023-01-14")
let myCreatedDate2=new Date("01-14-2023")
console.log(myCreatedDate1.toLocaleDateString());
console.log(myCreatedDate2.toLocaleDateString());

let tStamp=Date.now()
console.log(tStamp);

console.log(myCreatedDate1.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));

