function moyenne() {
    var m = (Number(n1.value) * Number(c1.value) +  Number(n2.value) * Number(c2.value) +  Number(n3.value) * Number(c3.value)) / ( Number(c1.value) +  Number(c2.value) +  Number(c3.value));
    moy.value = m;
    resultat.value = m > 20 ? "erreur" : m > 16 ? "Très bien" : m > 14 ? "Bien" : m > 10 ? "Assez Bien" : "Redoublant";
}