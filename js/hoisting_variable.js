// oncherche à utiliser une variable non encore affectée
console.log(x); //undefined => ne provoque pas d'erreur

// on déclare la variable x et on lui affecte une valeur
// Ceci provoque le hoisting de la déclaration, mais pas de l'affectation
var x = 5;
