const userEmail = [];

if (userEmail) {
  console.log("Got email");
} else {
  console.log("Dont have user email");
}

// falsy values
// false;
// 0;
// -0,
//0n
// BigInt,
// "";
// null;
// undefined;
// NaN;

// truthy values
// "0";
// " ";
// "true";
//'false';
//function(){}
// {}
// [];

if(userEmail.length === 0){
    console.log('Array is empty');
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}



