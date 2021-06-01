// premiere version un peu longue et un peu deguelasse
function select_joueur(){
    let rond = document.getElementsByClassName("rond").length;
    let croie = document.getElementsByClassName("croie").length;
    let joueur = 0;
    if(croie >= rond){
        joueur = 2;
    }else{
        joueur = 1;
    }
    return joueur;
}

function victoire(){

    let victoire = 0;
    let td1 = document.getElementById("case_1");
    console.log(td1)
    let td1_classe = td1.className;
    let td1_classe_index_rond = td1_classe.indexOf("rond");
    let td1_classe_index_croie = td1_classe.indexOf("croie");
    let td2 = document.getElementById("case_2");
    let td2_classe = td2.className;
    let td2_classe_index_rond = td2_classe.indexOf("rond");
    let td2_classe_index_croie = td2_classe.indexOf("croie");
    let td3 = document.getElementById("case_3");
    let td3_classe = td3.className;
    let td3_classe_index_rond = td3_classe.indexOf("rond");
    let td3_classe_index_croie = td3_classe.indexOf("croie");
    let td4 = document.getElementById("case_4");
    let td4_classe = td4.className;
    let td4_classe_index_rond = td4_classe.indexOf("rond");
    let td4_classe_index_croie = td4_classe.indexOf("croie");
    let td5 = document.getElementById("case_5");
    let td5_classe = td5.className;
    let td5_classe_index_rond = td5_classe.indexOf("rond");
    let td5_classe_index_croie = td5_classe.indexOf("croie");
    let td6 = document.getElementById("case_6");
    let td6_classe = td6.className;
    let td6_classe_index_rond = td6_classe.indexOf("rond");
    let td6_classe_index_croie = td6_classe.indexOf("croie");
    let td7 = document.getElementById("case_7");
    let td7_classe = td7.className;
    let td7_classe_index_rond = td7_classe.indexOf("rond");
    let td7_classe_index_croie = td7_classe.indexOf("croie");
    let td8 = document.getElementById("case_8");
    let td8_classe = td8.className;
    let td8_classe_index_rond = td8_classe.indexOf("rond");
    let td8_classe_index_croie = td8_classe.indexOf("croie");
    let td9 = document.getElementById("case_9");
    let td9_classe = td9.className;
    let td9_classe_index_rond = td9_classe.indexOf("rond");
    let td9_classe_index_croie = td9_classe.indexOf("croie");

    if(td1_classe_index_rond == 5 && td2_classe_index_rond == 5 && td3_classe_index_rond == 5){
        victoire = 1;
    }else if(td1_classe_index_croie == 5 && td2_classe_index_croie == 5 && td3_classe_index_croie == 5){
        victoire = 2;
    }else if(td1_classe_index_croie == 5 && td4_classe_index_croie == 5 && td7_classe_index_croie == 5){
        victoire = 2;
    }else if(td1_classe_index_rond == 5 && td4_classe_index_rond == 5 && td7_classe_index_rond == 5){
        victoire = 1;
    }else if(td2_classe_index_croie == 5 && td5_classe_index_croie == 5 && td8_classe_index_croie == 5){
        victoire = 2;
    }else if(td2_classe_index_rond == 5 && td5_classe_index_rond == 5 && td8_classe_index_rond == 5){
        victoire = 1;
    }else if(td3_classe_index_croie == 5 && td6_classe_index_croie == 5 && td9_classe_index_croie == 5){
        victoire = 2;
    }else if(td3_classe_index_rond == 5 && td6_classe_index_rond == 5 && td9_classe_index_rond == 5){
        victoire = 1;
    }else if(td4_classe_index_croie == 5 && td5_classe_index_croie == 5 && td6_classe_index_croie == 5){
        victoire = 2;
    }else if(td4_classe_index_rond == 5 && td5_classe_index_rond == 5 && td6_classe_index_rond == 5){
        victoire = 1;
    }else if(td7_classe_index_croie == 5 && td8_classe_index_croie == 5 && td9_classe_index_croie == 5){
        victoire = 2;
    }else if(td7_classe_index_rond == 5 && td8_classe_index_rond == 5 && td9_classe_index_rond == 5){
        victoire = 1;
    }else if(td3_classe_index_croie == 5 && td5_classe_index_croie == 5 && td7_classe_index_croie == 5){
        victoire = 2;
    }else if(td3_classe_index_rond == 5 && td5_classe_index_rond == 5 && td7_classe_index_rond == 5){
        victoire = 1;
    }else if(td1_classe_index_croie == 5 && td5_classe_index_croie == 5 && td9_classe_index_croie == 5){
        victoire = 2;
    }else if(td1_classe_index_rond == 5 && td5_classe_index_rond == 5 && td9_classe_index_rond == 5){
        victoire = 1;
    }else{
        victoire = 0;
    }
    return victoire;
}

function tdclick(id){
    let td = document.getElementById(id);
    let joueur = select_joueur();
    if(joueur === 2){
        td.classList.add("rond");
        td.onclick = '';
    }else{
        td.classList.add("croie");
        td.onclick = '';
    }
    let vic = victoire();
    if(vic == 1){
        alert('victoire du joueur 1');
    }else if(vic == 2){
        alert('victoire du joueur 2');
    }else if(vic == 3){
        alert('Match nul');
    }else{

    }
};

//deuxieme version propre
const content = document.querySelector("div");
content.onclick = function(e){
    let divElt = e.path[0];
    let classElt = e.path[0].getAttribute('class');
    let tabclass = classElt.split(" ");
    classElt = tabclass[1];
    if(classElt != undefined){
        alert("case déjà joué");
    }else{
        let joueur = select_joueur2();
        divElt.classList.add(joueur);
        calculVictoire(joueur);
    }
};

function select_joueur2(){
    let rond2 = document.getElementsByClassName("rond2").length;
    let croie2 = document.getElementsByClassName("croie2").length;
    let joueur = 0;
    if(croie2 >= rond2){
        joueur = "rond2";
    }else{
        joueur = "croie2";
    }
    return joueur;
}

function calculVictoire(j){
    let combinaison = ['1-2-3', '4-5-6', '7-8-9', '1-4-7', '2-5-8', '3-6-9', '1-5-9', '3-5-7'];
    for(let i = 0; i < combinaison.length; i++){
        let c = combinaison[i].split("-");
        let id1 = "case_"+c[0]+"_bis";
        let ele_1 = document.getElementById(id1);
        let id2 = "case_"+c[1]+"_bis";
        let ele_2 = document.getElementById(id2);
        let id3 = "case_"+c[2]+"_bis";
        let ele_3 = document.getElementById(id3);
        if(j == 1){
            if(ele_1.className.indexOf('rond2') != -1 && ele_2.className.indexOf('rond2') != -1 && ele_3.className.indexOf('rond2') != -1){
                alert(`Le joueur ${j} à gagné`);
                break;
            }
        }else{
            if(ele_1.className.indexOf('croie2') != -1 && ele_2.className.indexOf('croie2') != -1 && ele_3.className.indexOf('croie2') != -1){
                alert(`Le joueur ${j} à gagné`);
                break;
            }
        }
    }
}