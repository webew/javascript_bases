/*
    EXEMPLE 1
*/

// console.log(X); // ReferenceError : le hoisting ne fonctionne ni avec let ni avec const

// const X = 1;
// // X = 7;

// console.log("ok");


/*
    EXEMPLE 2
*/
let a = 5;
try{
    a = 5;
}catch(e){
    console.log("ben quoi ?");
}

console.log("%cTout va bien, je gère les erreurs","background-color:green");

console.info("La valeur de a est : "+a);
