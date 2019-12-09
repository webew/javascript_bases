let nombre = 10;

let resultat = nombre / 6;

console.log(resultat);

let arrondi = resultat.toFixed(2);
console.log(arrondi);

let n1 = 0.1;
console.log(n1);
let n2 = 0.2;
console.log(n2);


console.log(0.1+0.2);

let egal = n1+n2==0.3;
console.log(egal);
console.log(typeof egal);
if(n1+n2==0.3){
    console.log("ok")
}else{
    console.log("ko");
}
let test = 3/10;
console.log(test);
console.log(test == n1+n2);
console.log(test - (n1+n2));

// Division par zéro
console.log(10/0);
