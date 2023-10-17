function calcul_moyenne() {
    var n1= prompt("Donner la premiere note: ");
    var n2= prompt("Donner la deuxieme note: ");
    var n3= prompt("Donner la troisieme note: ");

    var somme= Number(n1)+Number(n2)+Number(n3);

    document.write ("Voici la somme: "+somme+"<br>");

    var moyenne = somme/3;

    document.write("Voici la moyenne: "+moyenne+"<br>")
    
    if (moyenne > 10)
        document.write("vous etes admis");
    else
        document.write("vous etes redoublant")
}

function test_age(){
    var n1= prompt("Donner un age: ");
    if(Number(n1)>=18){
        document.write ("<font size='8em' color='blue'>"+"je suis Majeur"+"</font>");  
        document.bgColor="green"
    }
    else{
        document.write ("<font size='8em' color='blue'>"+"je suis Mineur"+"   FBI OPEN UP"+"</font>");
        document.bgColor="red"
    }
}

function simple_affichage() {
    var n1= prompt("prenom :");
    var n2= prompt("nom :");

    document.write ('<div style= "margin:auto; width:50%; border:6px solid red;">');
    document.write ("helloworld ohayo "+n1+" "+n2)
    document.write ("</div>")`  `
}

function test_couleur(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    document.body.style.backgroundColor = randomColor;
}

function selectcouleur() {
    let c = prompt ("Donner une couleur");
    if(c == "rouge" || c == "ROUGE"){
        document.body.style.background = "red";
    }
    else if(c == "bleu" || c== "BLEU"){
        document.body.style.background = "blue";
    }
    else{
        document.write("couleur non comprise");
    }
}