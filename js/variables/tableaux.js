//const menu = ["Accueil", "Page 1", "Blog", "Contact"];

const tab = [2, 12,56,1,99];

console.group("Affichage du tableau");
console.log(tab);
console.groupEnd();

console.group("Affichage des éléments du tableau avec for...in...");
for(let i = 0; i < tab.length; i++){
    console.log(tab[i]);
}
console.groupEnd();

console.group("Affichage du tableau avec for...in...");
for(index in tab){
    console.log(tab[index]);
}
console.groupEnd();

console.group("Affichage du tableau avec for...of...");
for(elem of tab){
    console.log(elem);
}
console.groupEnd();

console.group("Affichage du tableau avec tab.foreach");
tab.forEach( function(element) {
    console.log(element);
});
console.groupEnd();

tab.push(100);
console.log(tab);


//ex trouver le max et le min d'un tableau
//calculer somme des valeurs
//calculer moyenne des valeurs
//tri