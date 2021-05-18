# jeux-js

## Jeux 1 FizzBuzz
### Contexte
Le FizzBuzz est un exercice très courant dans l'informatique.<br/>
Vous pourrezêtre confrontéà cet exercice pour un entretien d'embauche.<br/>
L'exercice n'est pas bien difficile mais l'employeur vérifiera la méthode que vous avez utilisé, le temps que vous avez mis ainsi que votre réflexion sur le problème posé.
### Consigne
Demandez à l'utilisateur de saisir un nombre "N" .<br/>
Afficher tous les nombres allant de 1 à "N", avec les particularités suivantes : <br/>
▪Remplacez tous les multiples de 3 par "FIZZ"<br/>
▪Remplaceztous les multiples de 5 par "BUZZ"<br/>
▪Remplacez tous les multiples de 3 ET 5 par "FIZZBUZZ"

## Jeux 2 Juste Prix
### Contexte
Vous connaissez certainement le jeu télévisé de Vincent Lagaffnommé "Le Juste Prix" ?<br/>
Une cagnotte remplie de cadeaux est proposée à un candidat qui arrive en finale.<br/>
Tous ces cadeaux ont une valeur qui est cachée au candidat.<br/>
Le candidat a 30 secondes pour deviner le prix exact du lot avec pour seule informations: ▪C'est plus.<br/>
▪C'est moins.
### Consigne
Demandez à l'utilisateur de saisir un nombre de tentative pour simuler les "30 secondes".<br/>(Ce nombre de tentatives représentera le nombre d'échec possible)<br/>
Générez un nombre aléatoire entre 0 et "N" saisie par l'utilisateur.Construisez le programme permettant de :<br/>
▪Saisir un nombre.<br/>
▪Comparer le nombre avec le résultat attendu "N".<br/>
▪Afficher "Plus" ou "Moins".<br/>
▪Retirer une vie.

## Jeux 3 Roller Coaster
### Contexte
Vous êtes ingénieur et on vous demande de calculer les profits que peut réaliserun Roller Coasteren une journée.<br/>
▪Un groupe de visiteur ne veut pas être séparé pour un tour de Roller Coaster.<br/>
▪Dès qu'il n'y a plus assez de places dans le manège pour le prochain groupe, il démarre.<br/>
▪Quand un groupe de visiteur a déjà fait un tour de manège, il se remet dans la file d'attente.<br/>
▪Chaque visiteur qui effectue un tour de manège dépense 1€
### Consigne
▪Le manège dispose d'un certain nombre de places assises. ("places")<br/>
▪Le manège ne peut effectuer qu'un certain<br/> nombre de tours pendant une journée ("tours")
▪La file d'attente est une liste de groupes de visiteurs. ("file")<br/>
Avec les informations du contexte et les données (places, tours, file), écrivez un programme permettant de calculer les profits du Roller Coastersur une journée.

## Jeux 4 Le jeu du pendu
### Contexte
Le jeu du pendu consiste à faire deviner un mot à une autre personne.<br/>
Le mot est masqué et le joueur qui doit deviner le mot n'a le droit de donner qu'une lettre à la fois.<br/>
Si cette lettre est dans le mot, elle est dévoilée
<br/>Sinon le joueur perd une vieSi le joueur n'a plus de vie, il a perdu.
### Consigne
Ecrivez un programme qui demande au premier utilisateur de saisir :<br/>
▪Un mot à trouver<br/>
▪Un nombre de vie<br/>
Masquez le mot de sorte à ce qu'il ressemble à _ _ _ _ _ _ _ (ex : bonjour)
Demandez au joueur une lettre (ex: "o")<br/>
Si cette lettre est dans le mot, affichez : _ o _ _ o _ _ Sinon il perd une vie
<br/>Quand le mot est affiché entièrement, le joueur gagneSi le joueur n'a plus de vie, il perd.

## Jeux 5 La roulette russe
### Contexte
La roulette russe est un jeu qui consiste à se tirer volontairement dans la tête avecun Revolver. (Arme à feu avec barillet)<br/>
Le barillet contient un certain nombre de balle définit avant de commencer la partie.<br/>
Le but étant de faire tourner le barillet avant de tirer pour que la balle soit à une positionaléatoire du barillet.<br/>
Si l'on met 1 balle dans un Revolver pouvant en contenir 8.A chaque tour, la probabilité de survivre est de 7/8
### Consigne
Écrivez un programme qui cette fois, confronte deux joueurs voulant jouer à la roulette russe
Demandez à l'utilisateur de saisir un nombre de balle à insérer dans le pistolet. (max : 8/8)<br/>
A tour de rôle, les joueurs vont tirer.Le dernier joueur en vie, remporte la partie.

## Jeux 6 Le chiffrage de César
### Contexte
Historiquement, le fait de transmettre des messages a toujours été une opération difficile.<br/>
Le message peut être récupéré par l'ennemi et renverser la situation.C'est pour cela qu'il a fallu sécuriser les messages. <br/>
L'une des premières méthodes pour chiffrer un message a été inventé à l'époque Romaine sous César et repose sur un principe très simple :
▪Les lettres de l'alphabet sont numérotés (A-1 ... Z-26)<br/>
▪Décaler d'un certain nombre les lettres<br/>
▪Si la clé de chiffrage est 3 →"A" devient "D" ... "Z" devient "C"
### Consigne
Écrivez un programme qui demande à l'utilisateur de :<br/>
▪Saisirun message (message)<br/>
▪Saisir une clé de chiffrage (cle)<br/>
Affichez le message codé dans la console.

## Jeux 6 Le morpion
### Contexte
Le tic-tac-toe , aussi appelé "morpion" est un jeu très simple à mettre en place sur papier.
Tout le monde y a déjà joué au moins une fois dans sa scolarité.En informatique, le tic-tac-toe va confronter deux joueurs qui joueront à tour de rôle.
Les difficultés sont :<br/>
▪L'affichage<br/>
▪Les conditions de victoire
### Consigne
Écrivez un programme qui confronte deux joueurs, jouant à tour de rôle.<br/>
Affichez une grille de 9 cases (3x3)Laissez le joueur choisir une case :
▪Si le joueur 1 choisit une case remplacez son contenu par "X"<br/>
▪Si le joueur 2 choisit une case remplacez son contenu par "O"<br/>
Si les joueurs choisissent une case déjà occupée, affichez un message d'erreur, faites recommencer le joueurDécrivez toutes les conditions de victoire et stoppez la partie quand un joueur l'emporte.
