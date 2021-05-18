// variable de l'exercie
let nb_place = 5;
let nb_tours = 3;
let nb_file = [2, 3, 5, 4];
// vaiable rechercher
let profit = 0;
// variable du reste de place dans le wagon
let nb_place_rest = 5;

// la boucle for sert à compter le nombre de tour restant 
for(let i = 1; i <= nb_tours; i++){
    nb_place_rest = 5;
    // cette boucle for permet de savoir le nombre de place restant dans le wagon
    for( let y = 0; y < nb_file.length; y++){
        nb_place_rest = nb_place_rest - nb_file[0];
        // si le wagon n'est pas plein
        if(nb_place_rest >= 0){
            val = nb_file[0];
            // on rajoute du profit ( c'est les personnes qui rentre dans l'attraction)
            profit += (val * 1);
            // ici on modifie la fille d'attente
            nb_file.shift();
            nb_file.push(val);
        }
    }
}
// à la fin de la journéee, on affiche le profit
console.log(`Profits -> ${profit}€`);