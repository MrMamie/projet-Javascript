var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

var b = document; // La variable b contient l'objet body du DOM
console.log(b);

if (document.nodeType === document.ELEMENT_NODE) {
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}

// Accès au premier enfant du noeud body
console.log(document.childNodes[1].childNodes[0]);

// Accès au deuxième enfant du noeud body
console.log(document.childNodes[1]);

// Affiche les noeuds enfant du noeud body
for (var i = 0; i < document.childNodes.length; i++) {
    console.log(document.childNodes[i]);
}

var h1 = document.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud body

console.log(document.parentNode); // Affiche null : document n'a aucun noeud parent