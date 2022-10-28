let ajoutButton = document.querySelector("button");
let listDessert = document.getElementById('desserts')

ajoutButton.addEventListener('click', function (e) {

        let liElmts = document.createElement('li');
        liElmts.textContent =  prompt('Saisir un dessert');
        liElmts.addEventListener('click', function (e) {
            liElmts.textContent =  prompt('Modifier le dessert', e.target.textContent);
            console.log(e);
        })
        listDessert.appendChild(liElmts);

})
   
