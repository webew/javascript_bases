/* Objectifs :
 - définir un Objet
 - mettre en évidence la copie par référence d'un objet
 - 
 */

let obj = {"name": "Toto"}; //on définit une variable obj : c'est un objet
let objCopy = obj;  //on définit une variable objCopy comme étant "égale" à la variable obj

// Affichage des valeurs d'origine des variables x et y
console.group("Valeurs d'origine");
console.log("x", obj);
console.log("y", objCopy);
console.groupEnd();

objCopy.name = "Tata";  //on affecte une nouvelle valeur à la propriété name de l'objet objCopy

// Affichage des valeurs des variables x et y
console.group("Valeurs après modification de la propriété name de y");
console.log("x", obj);
console.log("y", objCopy);
console.groupEnd();

objCopy = {"name" : "Bla Bla"};
// Affichage des valeurs des variables x et y
console.group("Valeurs après modification de la propriété name de y");
console.log("x", obj);
console.log("y", objCopy);
console.groupEnd();

obj.lastName = "Tyty";
let propAge = "age";
obj[propAge] = 25;
console.log(obj);
delete obj.age;
console.log(obj);