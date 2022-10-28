ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json",function (reponse) {
    let tabElmt = document.getElementById("tableau");
    let tabOeuvres = JSON.parse(reponse) ;
tabOeuvres.forEach(function (oeuvre) {

    console.log(oeuvre.nom);
    let trElmts = document.createElement("tr");
    trElmts.innerHTML = "<td>"+oeuvre.nom+"</td><td>"+oeuvre.annee+"</td><td>"+oeuvre.auteur+"</td>";
    tabElmt.appendChild(trElmts);

})})

setTimeout(function () {
    setInterval(
        function () {
            console.log("Top");
        },
        1000);
}, 2000);