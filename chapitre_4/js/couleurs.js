let couleurTexte = prompt('Saisir une couleur pour le texte');
let couleurFond = prompt('Saisir une couleur de fond');
let paragraphe = document.querySelectorAll("div");

for (let i = 0; i < paragraphe.length; i++) {
    paragraphe[i].style.color = couleurTexte;
    paragraphe[i].style.backgroundColor = couleurFond;
    
}


