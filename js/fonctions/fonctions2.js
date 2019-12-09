
// On déclare une fonction qui retourne une fonction
function myFunction() {
    return function(number){
        return number * 2;
    }
}

console.log(myFunction); // affiche la définition de la fonction myFunction
console.log(myFunction()); // affiche le retour de la fonction myFunction => function(number){return number * 2}
console.log(myFunction()(5)); // affiche le résultat de l'appel à la fonction retournée par myFunction

const retFunction = myFunction(); // 
console.log(retFunction); // affiche le retour de la fonction myFunction => function(number){return number * 2}
console.log(retFunction(7)); // affiche le résultat de l'appel à la fonction retournée par myFunction
