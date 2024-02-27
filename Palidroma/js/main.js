
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


// facciamo delle const iniziale per stabilire i valori

let word = prompt('Type a word:');
//stampiamo nella console
console.log(word);
//stabiliamo il modo in quale calcola la parola inserita dal utente 
//let wordReverse = word.split('').reverse().join('');
////stampiamo nella console
//console.log(wordReverse);

//chiamata alla funzione per controllare se la parola è un palindromo


//definizione della funzione per controllare se una parola è un palindromo

function palindromeWords(word) {
    let wordReverse = word.split('').reverse().join('');
    if (word === wordReverse) {
        alert('The entered word is a palindrome.');
    } else {
        alert('The entered word is not a palindrome.');
    }

    console.log(wordReverse);
}
palindromeWords(word);

