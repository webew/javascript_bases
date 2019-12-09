const module1 = (function () {
    var myPassword = "12345";
    
    // restera privée
    function setPassword(newPassword){
        myPassword = newPassword;
    }
    
    // sera exportée par le return de la fonction
    function getPassword(){
        return myPassword;
    }

    // rend la fonction getPassword accessible à l'extérieur de l'iife
    return {
        getPassword: getPassword
    }
})();
