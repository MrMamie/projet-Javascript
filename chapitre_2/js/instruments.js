 function infoLiens(){

     let aElmts = document.querySelectorAll('a');
     console.log(aElmts.length);
     console.log(aElmts[0].href);
     console.log(aElmts[aElmts.length -1].href);
    }
infoLiens();


function possede(id, classe) {
    var instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe));
    } else {
        console.log("Aucun élément ne possède l'identifiant " + id);
    }
}
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
 