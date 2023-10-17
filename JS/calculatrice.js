function addition(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)+Number(b);

    t3.value = c;
}

function soustraction(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)-Number(b);

    t3.value = c;
}

function division(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)/Number(b);

    t3.value = c;
}

function produit(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)*Number(b);

    t3.value = c;
}

function parite(){
    var ele = document.getElementById("t3").value;

    if (ele%2 ==0){
        t4.value = "pair";
    }
    else{
        t4.value = "impair"
    }
}

function permute(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = "";
    c = a;
    a = b;
    b = c;
    t1.value = a;
    t2.value = b;
}

