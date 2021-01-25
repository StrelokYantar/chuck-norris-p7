'use strict';

// Objectif: Reproduire un générateur de punchlines "Chuck Norris"

// Consignes:
// - Dans un tableau, stocker au moins 10 punchlines de Chuck Norris
// - A chaque click du bouton
// - générer une couleur aléatoire 
// - récupérer aléatoirement une des punchlines
// - Afficher la nouvelle phrase
// - Remplacer l'ancienne couleur du texte/bouton/arrière-plan par la nouvelle


const words = ["1-Chuck Norris ne ment pas, c'est la vérité qui se trompe.", 
            "2-Chuck Norris est en couleur sur les photos Noir et Blanc.", 
            "3-Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.", 
            "4-Chuck Norris peut diviser par zéro.", 
            "5-Chuck Norris est contre les radars automatiques : ça l'éblouit lorsqu'il fait du vélo.", 
            "6-Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.", 
            "7-Chuck Norris joue à la roulette russe avec un chargeur plein.", 
            "8-Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.", 
            "9-Chuck Norris enfant n'envoyait pas de lettres au Père Noël. Il envoyait des ultimatums.", 
            "10-Chuck Norris peut t'étrangler avec un téléphone sans fil."
        ]

        console.log(words[Math.random(0,1)])


        const myColor = document.getElementById("container");
        const citation_box = document.querySelector(".citation_box");
        const box = document.querySelector(".citation");
        const button = document.querySelector("button");
        
        myColor.style.backgroundColor = "#fb6964";
        box.style.color = "#fb6964";
        citation_box.style.color = "#fb6964";
        button.style.backgroundColor = "#fb6964";

        
function changeColor() {
    
    let randomColor = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    myColor.style.backgroundColor = randomColor;
    citation_box.style.color = randomColor;
    citation_box.innerHTML = words[Math.floor(Math.random() * words.length)];
    box.style.color = randomColor;
    button.style.backgroundColor = randomColor;
    
};




button.addEventListener("click", changeColor);

        