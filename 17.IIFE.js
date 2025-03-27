//To stop pollution from global scope ---- important fro interviews
(function chai(){
    console.log(`DB CONNECTED`); 
})();

// chai()
//2nd IIFE won't run if semicolon not used
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Arka') 