let paragraphe = document.getElementsByTagName("div");

let pressClavier = document.addEventListener("keypress", function (e) {
  for (let i = 0; i < paragraphe.length; i++) {
    if (e.key === "j" || e.key === "J") {
      paragraphe[i].style.backgroundColor = "yellow";
    } else if (e.key === "r" || e.key === "R") {
      paragraphe[i].style.backgroundColor = "red";
    } else if (e.key === "b" || e.key === "B") {
      paragraphe[i].style.backgroundColor = "white";
    } else if (e.key === "v" || e.key === "V") {
      paragraphe[i].style.backgroundColor = "green";
    }
  }
});
