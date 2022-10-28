let bouton = document.getElementById('clic');
let affichageCompteur = document.getElementById('compteurClics');
let cancelButton = document.getElementById('desactiver');

bouton.addEventListener('click',function () {
    affichageCompteur.textContent ++;
    console.log(affichageCompteur);
})

cancelButton.addEventListener('click',function() {
    bouton.removeEventListener('click')
})
