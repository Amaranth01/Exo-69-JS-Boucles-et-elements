//Exo1

let a = document.getElementById('liste-commissions');

let b = document.createElement("li");

a.appendChild(b);

b.innerHTML = "Paquet de couches";

document.getElementById('id1').value='Complétez votre liste';

//Exo2

let button = document.getElementById('button');

function buttonCliked () {
    b.remove(b);
}

button.addEventListener ("click", buttonCliked ) ;

