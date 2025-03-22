function sayMyName(){
    console.log("H");    
    console.log("I");    
    console.log("T");    
    console.log("E");    
    console.log("S");    
    console.log("H");    
}

sayMyName()


function addTwoNumbers(num1,num2){
    return num1+num2
}

const res=addTwoNumbers(3,5);
// console.log("Result:",res);

const loginUserMessage=(username="sam")=>{
    if(!username){
        console.log('Please enter a username!');
        return
    }
    return `${username} just logged in!`
    
}

let name=loginUserMessage('Hitesh')
console.log(name);
