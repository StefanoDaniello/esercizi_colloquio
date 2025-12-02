document.querySelector(".title").onclick = function () {
  alert("Hello World!");
};

// 1. Manipolazione di Array (Spesso Richiesto)
// Esercizio: Scrivi una funzione JavaScript che prenda un array di numeri e restituisca un
// nuovo array contenente solo i numeri pari, ordinati in senso crescente.
// Input Esempio: const numbers = [4, 1, 9, 2, 6, 5];
// Output Atteso: [2, 4, 6]

const numbersArray = [4, 1, 9, 2, 6, 5];

function sortNumber(numbers) {
  const evenNumbers = numbers
    .filter((n) => {
      return n % 3 == 1;
    })
    .sort((a, b) => a - b);
  console.log(evenNumbers);
  //   const sortingNumbers = evenNumbers.sort((a, b) => a - b);
  //   console.log(sortingNumbers);
}
sortNumber(numbersArray);

// 2. Manipolazione di Stringhe (Palindrome)
// Esercizio: Scrivi una funzione JavaScript che prenda una stringa e restituisca true se è un palindromo
// (si legge allo stesso modo al contrario, ignorando la distinzione tra maiuscole/minuscole e spazi) e false altrimenti.
// Input Esempio: "I topi non avevano nipoti"
// Output Atteso: true

function PalindromeWord(word) {
  const noSpaceWord = word.replace(/\s/g, "").toLowerCase();
  console.log(noSpaceWord);

  // 2. Inversione:
  //    a. split("") trasforma la stringa in un array di caratteri.
  //    b. reverse() inverte l'ordine degli elementi nell'array.
  //    c. join("") riunisce l'array invertito in una nuova stringa.

  const reversedWord = noSpaceWord.split("").reverse().join("");
  const isPalindrome = noSpaceWord === reversedWord;

  if (isPalindrome) {
    console.log(`La parola "${word}" è una PALINDROMA.`);
  } else {
    console.log(`La parola "${word}" NON è una palindroma.`);
  }
}
PalindromeWord("I topi non avevano nipoti");

// 3. DOM Manipulation (React-like Logic)
// Esercizio: Spiega come implementeresti un contatore (+ e - per incrementare/decrementare un numero visualizzato)
// usando solo JavaScript vaniglia (HTML/CSS esclusi per la logica). Dovresti specificare:
// Come ottieni i riferimenti agli elementi (bottone e display).
// Come associ l'evento di click ai bottoni.
// Come aggiorni il testo del display.

const buttonDecrementa = document.getElementById("btn1");
const buttonIncrementa = document.getElementById("btn2");
const result = document.getElementById("result");

let contatore = 0;
result.innerHTML = contatore;

buttonDecrementa.addEventListener("click", function () {
  if (contatore > 0) {
    contatore--;
    result.innerHTML = contatore;
  } else {
    alert("contatore già a 0");
  }
});
buttonIncrementa.addEventListener("click", function () {
  if (contatore < 10) {
    contatore++;
    result.innerHTML = contatore;
  } else {
    alert("Il contatore è arrivato al massimo");
  }
});
