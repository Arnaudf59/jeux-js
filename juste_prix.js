const read = require('readline-sync');

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
var prix = entierAleatoire(1, 100);
let coup = +read.question("Saisir le nombre de chance:");
let chance = 1;
let victoire = 0;

for(let compteur = 1; compteur <= coup; compteur += 1){
    let prix_joueur = +read.question("Quelle est votre prix? (entre 1 et 100):");
    if(prix_joueur > prix){
        chance = coup - compteur;
        console.log(`C'est plus bas, il vous reste ${chance} chance(s)`);
    }else if(prix_joueur < prix){
        chance = coup - compteur;
        console.log(`C'est plus haut, il vous reste ${chance} chance(s)`);
    }else{
        console.log('Bravo, le bon prix était bien ${prix}€');
        victoire = 1;
        break;
    }
}
if(victoire === 0){
    console.log(`Desole, vous avez perdu le bon prix etait : ${prix}€`);
}


