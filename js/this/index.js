/*
/ this dans le contexte global
*/
console.log(this); // this est window

function first() {
    console.log(this);
}

first(); // window => équivalent à window.first();

/*
/ this dans un objet javascript
*/
const me = {
    name: "Toto",
    afficher: function(){
        console.log(this); // this représente l'objet me
    }
};
me.afficher(); // affiche l'objet me

/*
/ this dans le contexte global
*/
function second() {
    console.log(this);
}
const you = {
    name: "Tata",
    afficher: second // this représente l'objet you
};
you.afficher(); // affiche l'objet you
