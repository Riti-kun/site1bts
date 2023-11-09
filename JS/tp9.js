function login(){
    var log=prompt("Donner votre nom d'utilisateur :");
    var pass=prompt("Entrez votre mot de passe :");
    if (log == "admin" && pass == "admin"){
        document.write("Bienvenue : " + log);
    }
    else{
        alert("Accès refusé.");
    }
}