const read = require('readline-sync');

let val = +read.question("Saisir un nombre:");

for(let i = 0; i <= val; i++){
    reste_3 = i % 3;
    reste_5 = i % 5;
    if(reste_3 == 0 && reste_5 != 0){
        console.log('FIZZ');
    }else if(reste_3 != 0 && reste_5 == 0){
        console.log('BUZZ');
    }else if(reste_3 == 0 && reste_5 == 0){
        console.log('FIZZBUZZ');
    }else{
        console.log(i);
    }
}