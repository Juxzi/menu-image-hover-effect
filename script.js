/*const menu = document.querySelectorAll("nav div");

menu.forEach(div => {
    const link = div.querySelector("a"); // Sélectionne l'élément <a> à l'intérieur de la div
  
    div.addEventListener("mouseover", () => {
      // Change la taille de police du lien lors du survol
      link.style.fontSize = "3rem";
    });
    
    div.addEventListener("mouseout", () => {
      // Remet la taille de police du lien à son état d'origine lorsque la souris quitte le div
      link.style.fontSize = "";
    });
  });

