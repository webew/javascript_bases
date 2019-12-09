function multiply(number1, number2){
    console.log(this);
    console.log(number1 * number2);
}

const me = {
    name: "Toto"
};

multiply(2,3); // affiche les console.log / this = window

multiply.bind(me,2,3)(); // exécution de la fonction multiply / this = me

multiply.call(me,2,3); // exécution de la fonction multiply / this = me

multiply.apply(me, [2,3]); // exécution de la fonction multiply / this = me