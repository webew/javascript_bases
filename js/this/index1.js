const obj = {
    name: "Titi",
    afficher: function(){
        console.log(this); // this représente l'objet obj

        function insideFunction(){
            console.log(this);// this représente window
        }

        insideFunction(); // window

        this.insideFunction(); // Uncaught TypeError: this.insideFunction is not a function
    }
};

obj.afficher(); // affiche l'objet