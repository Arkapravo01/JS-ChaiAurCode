const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularUser={
    email:'some@gmail.com',
    fullName:{
        userFullName:{
            firstName:'Hitesh',
            lastName:'Choudhury'
        }
    }
}

// console.log(regularUser.fullName?.userFullName.lastName);

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj4={1:'e',2:'f'}
const obj3={...obj1,...obj2}
const obj5=Object.assign({},obj1,obj2,obj4)
console.log(obj5);

const users=[
    {
        id:1,
        email:'h@gmail.com',
    },
    {

    },
    {

    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));


const course={
    courseName:'JS in Hindi',
    price:999,
    courseInstructor:'Hitesh',
}

// console.log(course.courseInstructor);

// const {courseInstructor:ins}=course
const {courseInstructor,courseName,price}=course
console.log(courseInstructor,courseName,price);


