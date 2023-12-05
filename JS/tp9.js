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

function seconnecter2(){
    window.location.href="../TP9/login.html";
    
}

function v(){
    var log= user.value;
    var pass= mdp.value;
    if (log == "admin" && pass == "admin"){
        window.location.href="../TP9/valider.html";
    }
    else{
        window.location.href="../TP9/refuser.html";
    }
}

function affichagetab(){
    document.write('<table border=2px width=30%>');
    for (var i = 0; i<=5; i++){
        document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>')
}

function affichagetab2(){
    var n1= prompt("Donner la troisieme note: ");
    document.write('<table border=2px width=30%>');
    for (var i = 1; i<= n1; i++){
        document.write('<tr><td>'+i+'</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>')
}

function cdc(){
    var wr=prompt("Ecrivez quelque chose :");
    document.write(wr.toUpperCase()+"<br>");
    document.write(wr.toLowerCase()+"<br>");
    document.write("La chaine de caractère contient "+ wr.length+" caractères"+"<br>");
    document.write("La première lettre est " + wr.substr(0,1)+"<br>");

}

function colors(){
    var color = prompt("Entrer une couleur :");
    switch (color) {
        case "rouge":
            document.body.style.background ="red";
            break;
        case "ROUGE":
            document.body.style.background ="red";
        case "bleu":
            document.body.style.background ="blue";
            break;
        case "BLEU":
            document.body.style.background ="blue";
        case "vert":
            document.body.style.background ="green";
            break;
        case "VERT":
            document.body.style.background ="green";
            
        case "blanc":
            document.body.style.background ="white";
            break;
        case "BLANC":
            document.body.style.background ="white";      
            
        default:
        alert('Couleur non prise en compte, veuillez choisir une autre couleur parmit : rouge, bleu et vert');
    }
}

function addline(){
    var tab = document.getElementById("Tab");
    var newRow = tab.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = "Nouveau Nom";
    cell2.innerHTML = "Nouveau Age";
}


function login3_0(){
    var i= 0;
    do {
        var id = prompt("Entrez votre nom d'utilisateur");
        var mdp = prompt("Entrez votre mot de passe");
        if (id == "admin" && mdp == "admin") {
            document.write("Bienvenue "+id);
            break;
        } else 
            alert("Accès refusé");
        i++;
    } while (i<3);

    if (i==3)
        alert("Delai dépassé");
}

function test(){
    for (i = 0 ; i < 5; i++){
    document.write(i+"/");
}
}