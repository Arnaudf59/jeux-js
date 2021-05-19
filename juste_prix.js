const read = require('readline-sync');

// fonction pour obtenir un nombre aléatoire (elle posséde 2 arguments)
/*function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
// la variable prix utilise la fonction entierAleatoire pour obtenir le prix rechercher (elle utilise les parametre & et 100, se qui signifie que le nombre récupérer sera entre 1 et 100)
var prix = entierAleatoire(1, 100);
let coup = +read.question("Saisir le nombre de chance:");
let chance = 1;
let victoire = 0;

// cette boucle for permet de compter le nombre de tour restant au jour pour trouver le bon prix
for(let compteur = 1; compteur <= coup; compteur += 1){
    let prix_joueur = +read.question("Quelle est votre prix? (entre 1 et 100):");
    // la condition if, else if et else permette de savoir si le prix est plus haut, plus bah ou si le joueur a gagné
    if(prix_joueur > prix){
        chance = coup - compteur;
        console.log(`C'est plus bas, il vous reste ${chance} chance(s)`);
    }else if(prix_joueur < prix){
        chance = coup - compteur;
        console.log(`C'est plus haut, il vous reste ${chance} chance(s)`);
    }else{
        console.log(`Bravo, le bon prix était bien ${prix}€`);
        victoire = 1;
        // en cas de victoire, on arrête le jeux
        break;
    }
}
// Si le jour n'a pas gagner, il a perdu
if(victoire === 0){
    console.log(`Desole, vous avez perdu le bon prix etait : ${prix}€`);
}*/

// Le Juste prix en function

function main(){
    var prix = entierAleatoire(1, 100);
    let coup = +read.question("Saisir le nombre de chance:");
    let chance = 1;
    let victoire = 0;

    jeux(prix, coup, chance, victoire);
}

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jeux(prix, coup, chance, victoire){
    for(let compteur = 1; compteur <= coup; compteur += 1){
        let prix_joueur = +read.question("Quelle est votre prix? (entre 1 et 100):");
        chance = coup - compteur;
        // la condition if, else if et else permette de savoir si le prix est plus haut, plus bah ou si le joueur a gagné
        if(prix_joueur > prix && chance > 0){
            console.log(`C'est plus bas, il vous reste ${chance} chance(s)`);
        }else if(prix_joueur < prix  && chance > 0){
            console.log(`C'est plus haut, il vous reste ${chance} chance(s)`);
        }else{
            // si le prix du jour n'est pas le bon, le joueur a perdu
            if(chance == 0 && prix_joueur != prix){
                victoire = 0;
                victoire_jeux(victoire, prix);
            // si le prix du jour est le bon, le joueur a gagné
            }else{
                victoire = 1;
                victoire_jeux(victoire, prix);
                // en cas de victoire, on arrête le jeux
                break;
            }
        }
    }
}
function victoire_jeux(victoire, prix){
    if(victoire === 0){
        return console.log(`Desole, vous avez perdu le bon prix etait : ${prix}€`);
    }else{
        return console.log(`Bravo, le bon prix était bien ${prix}€`);
    }
}

main();


