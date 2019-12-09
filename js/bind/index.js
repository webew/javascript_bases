function first(){
    console.log(this);
}
first(); // window

const me = {
    name: "Toto",
    afficher: function () {
        console.log(this); // me
    }
};

const second = first.bind(me); 
second(); // me

me.afficher.bind(me)();



function multiply(number1, number2){
    console.log(this);
    return(number1 * number2);
}

const multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(3));