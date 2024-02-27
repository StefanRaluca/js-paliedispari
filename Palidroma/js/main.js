//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


// facciamo delle const iniziale per stabilire i valori

let word = prompt('Type a word:');
//stampiamo nella console
console.log(word);
//stabiliamo il modo in quale calcola la parola inserita dal utente 
let wordReverse = word.split('').reverse().join('');
////stampiamo nella console
console.log(wordReverse);
//condizione per controllare la parola
if (word === wordReverse) {
    alert('The entered word is a palindrome.');
} else {
    alert('The entered word is not a palindrome.');
}
