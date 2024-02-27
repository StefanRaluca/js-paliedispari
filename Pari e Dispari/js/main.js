/*  Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri
 Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
 Dichiariamo chi ha vinto. */

// let per stabilire le cosa richiediamo al utente

let userChoice = prompt("Scegli pari o dispari:");
console.log(userChoice);

let userNumber = Number(prompt("Inserisci un numero da 1 a 5:"));
console.log(userNumber);

// let per generare un numero random da 1 a 5
/**
 * 
 * @returns {number}
 */
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}
let myRandomNumber = randomNumber();
console.log(myRandomNumber); // 

//facciamo la somma dei numeri (dal utente e il random)
/**
 * 
 * @returns {number}
 */
function sum(num1, num2) {
  return num1 + num2;
}

let sumNumber = sum(userNumber, myRandomNumber);
console.log(sumNumber);


// Verifichiamo se la somma è pari o dispari
/**
 * True se e' pari, false se e' dispari
 * @returns {boolean}
 */
function evenOrOdd(number) {
   return number % 2 === 0;
} 
let even_or_odd = evenOrOdd(sumNumber);
console.log(even_or_odd);

//Dichiariamo chi ha vinto con la condizione if

// pari, 4 = true - (userChoice === "pari" && evenOrOdd(sumNumber))
// dispari, 3 = true - (userChoice === "dispari" && !evenOrOdd(sumNumber))

if ((userChoice === "pari" && even_or_odd) || (userChoice === "dispari" && !even_or_odd)) {
    console.log(`You win! Your choice is ${userChoice} and number ${sumNumber}`);
} else {
    console.log("You lost!");
}
