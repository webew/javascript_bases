let hello = "Hello";

console.log(hello);

let world = "World";

//concaténation
let helloWorld = hello + " " + world;
console.log(helloWorld);

// échapper
let echap = "Citation : \"J'aime le Javascript !\"";
console.log(echap);

//template strings
let texte = "bien";
let message = `J'aime ${texte} le Javascript !`
console.log(message);
console.log(message.length);
console.log(message[0]);
for(let lettre of message){
    console.log(lettre);
}


//immutabilité
let nom = "Einstein";
nom[0] = "Z";//ne fonctionne pas mais ne provoque pas d'erreur
console.log(nom);
