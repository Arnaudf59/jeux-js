const read = require('readline-sync');

// fonction pour savoir si on mets une balle ou pas
function getRandomInt(max) {
    return Math.round(Math.random() * max);
  }

let balle = +read.question("Combien de balle mettez vous?(Max:8)");
let barillet = [];
let utilsateur = "";

// vérification si on mets bien moins de 8 balle
if(balle <= 8){
    console.log(`Vous avez mis ${balle} balle(s) dans l'arme`);
    let count_balles = 0;
    // boucle permettant de mettre les balles de façon aléatoire
    for(i = 0; i < 8; i++){
        // utilisation de la fonction pour savoir si on mets une balle ou pas
        nb_aléatoire = getRandomInt(1);
        // si on mets une balle et qu'il n'en reste plus
        if(nb_aléatoire == true && count_balles > balle){
            barillet[i] = 0;
        // si on ne mets pas de balle, mais qu'il nous en reste trop
        }else if(nb_aléatoire === 0 && (balle - count_balles) >= (8 - i)){
            barillet[i] = 1;
            count_balles += 1;
        }else{
            // si on n'en mets pas
            if(nb_aléatoire === 0 && (balle - count_balles) <= (8 - i)){
                barillet[i] = nb_aléatoire;
            }else if(balle == 0){
                barillet[i] = 0;
            // si on en mets
            }else{
                barillet[i] = 1;
                count_balles += 1;
            }
        }
    }
    // debut de partie
    for(let compteur = 1; compteur <= 8; compteur += 1){
        // Savoir qu'elle utilisateur joue
        let joueur = compteur % 2;
        if(joueur == 1){
            utilisateur = "joueur 1";
        }else{
            utilisateur = "joueur 2";
        }
        let val = +read.question(`${utilisateur} c'est a vous, taper sur 1 pour tirer:`);
        // savoir si l'utilsateur meur ou pas
        if(typeof val){
            if(barillet[0] === 0){
                console.log('Bravo, vous etes toujours en vie');
                barillet.shift();
            }else{
                if(joueur == 1){
                    utilisateur = "joueur 2";
                }else{
                    utilisateur = "joueur 1";
                }
                console.log(`Vous etes mort, le ${utilisateur} a gagne`);
                break;
            }
        }
    }
}else{
    console.log('Vous avez mis trop de balles');
}
