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
randomNumber()
 console.log(randomNumber());

//facciamo la somma dei numeri (dal utente e il random)
/**
 * 
 * @returns {number}
 */
function sum() {
  return userNumber + randomNumber();
}
console.log(sum());
sum()

// Verifichiamo se la somma è pari o dispari
/**
 * 
 * @returns {boolean}
 */
function evenOrOdd() {
   return sum % 2 === 0;
} 
console.log(evenOrOdd());

evenOrOdd()

//Dichiariamo chi ha vinto con la condizione if
if ((userChoice === "pari" && evenOrOdd) || (userChoice === "dispari" && !evenOrOdd)) {
    console.log("You win!");
} else {
    console.log("You lost!");
}
