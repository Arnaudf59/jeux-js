const read = require('readline-sync');
let mot = read.question("Quelle est le mot a faire deviner?");
let vie = +read.question("Quelle est le nombre de vie?");
let nb_lettre = mot.length;
let indices = [];
let tab_lettre = mot.split('');
let mot_aff = [];
let victoire = 0;
for(let a = 1; a <= nb_lettre; a++){
    mot_aff.push('_');
}
console.log(mot_aff);
for(let i = 1; i <= vie; i++){
    let lettre = read.question("Quelle lettre voulais vous essayer?");
    let result = tab_lettre.indexOf(lettre);
    let gagne = mot_aff.indexOf('_');
    if(result === -1){
        console.log("Dommage, cette lettre n'est pas dnas le mot");
        console.log(mot_aff);
    }else{
        while (result != -1) {
            indices.push(result);
            result = tab_lettre.indexOf(lettre, result + 1);
        }
        console.log(indices);
        console.log(mot_aff);
        for(b = 0; b <= indices.length; b++){
            mot_aff.splice(indices[b], 1, lettre);
        }
        console.log("En effet, cette lettre est dans le mot");
        indices.pop();
        console.log(mot_aff);
    }
    if(gagne === -1){
        console.log(`Bravo, le bon mot était bien ${mot}`);
        victoire = 1;
        break;
    }
}
if(victoire === 0){
    console.log(`Desole, vous avez perdu le bon mot etais : ${mot}`);
}