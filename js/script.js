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
      return n % 2 == 1;
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

//----------------------------------------//
// Manipolazione di Oggetti: Contare le Occorrenze
// Esercizio: Scrivi una funzione JavaScript chiamata countItems(items)
//  che prenda un array di stringhe e restituisca un oggetto che contiene il conteggio di ogni elemento.
// Input Esempio: const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Output Atteso: { apple: 3, banana: 2, orange: 1 }
// Concetti Chiave: Cicli (forEach o reduce) e manipolazione delle proprietà di un oggetto.

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countItems(items) {
  const counts = {};

  items.forEach((e) => {
    if (counts[e] === undefined) {
      counts[e] = 1;
    } else {
      counts[e]++;
    }
  });

  return counts;
}

console.log(countItems(fruits));

// 1. ⚙️ Esercizio su Array: Rimuovere Duplicati
// Scrivi una funzione JavaScript chiamata removeDuplicates(arr) che prenda un array e
// restituisca un nuovo array contenente solo gli elementi unici, mantenendo l'ordine di prima occorrenza.

const items = [1, "a", 3, "b", 1, 3, "a", 5, "b"];

function removeDuplicates(arr) {
  const noDuplicates = [];
  arr.forEach((e) => {
    if (!noDuplicates.includes(e)) {
      noDuplicates.push(e);
    }
  });
  console.log(noDuplicates);
}

removeDuplicates(items);

// ---------------------------------------------------------- //

const prodotti = [
  { nome: "Laptop", categoria: "Elettronica", prezzo: 1200, quantità: 5 },
  { nome: "T-Shirt", categoria: "Abbigliamento", prezzo: 25, quantità: 20 },
  { nome: "Libro", categoria: "Libreria", prezzo: 15, quantità: 50 },
  { nome: "Smartphone", categoria: "Elettronica", prezzo: 800, quantità: 12 },
  { nome: "Jeans", categoria: "Abbigliamento", prezzo: 70, quantità: 10 },
  { nome: "Tablet", categoria: "Elettronica", prezzo: 800, quantità: 9 },
  { nome: "Quaderno", categoria: "Libreria", prezzo: 5, quantità: 100 },
  { nome: "smart-watch", categoria: "Elettronica", prezzo: 800, quantità: 6 },
];

// 🗺️ Esercizi con map (Trasformazione)
// Esercizio 1: Calcola il Valore Totale in Magazzino
// Crea un nuovo array dove ogni elemento è un oggetto che contiene il nome del prodotto e il suo valore totale in magazzino (prezzo moltiplicato per quantità).

const prodotti_totale = prodotti.map((prodotto) => ({
  nome: prodotto.nome,
  totale: prodotto.prezzo * prodotto.quantità,
}));
console.log(prodotti_totale);

// Esercizio 2: Estrai solo i Nomi
// Crea un nuovo array che contenga solo i nomi di tutti i prodotti.

const only_name = prodotti_totale.map((p) => ({
  nome: p.nome,
}));
console.log(only_name);

// Esercizi con filter (Selezione)
// L'obiettivo è creare un nuovo array contenente solo gli elementi che soddisfano una data condizione.

// Esercizio 3: Prodotti a Basso Prezzo
// Crea un array contenente solo i prodotti il cui prezzo è inferiore a 50.

const low_price = prodotti.filter((e) => e.prezzo < 50);
console.log(low_price);

// Esercizio 4: Prodotti in Esaurimento
// Crea un array contenente solo i prodotti la cui quantità è inferiore o uguale a 10.

const low_quantity = prodotti.filter((e) => e.quantità <= 10);
console.log(low_quantity);

// Esercizio 5: Ordina per Prezzo (Crescente)
// Ordina l'array prodotti dal prezzo più basso al prezzo più alto.

const prodotti_asc = prodotti.sort((a, b) => a.prezzo - b.prezzo);
console.log(prodotti_asc);

// Esercizio 6: Ordina per Quantità (Decrescente)
// Ordina l'array prodotti in base alla quantità in magazzino più alta (dal più grande al più piccolo).

const prodotti_desc = prodotti.sort((a, b) => b.prezzo - a.prezzo);
console.log(prodotti_desc);

// Esercizio 7: Nomi dei Prodotti Elettronici
// Filtra l'array per ottenere solo i prodotti nella categoria 'Elettronica'.
// Successivamente, mappa il risultato per estrarre solo il nome e la quantità di questi prodotti.
// Infine Sorta in modo che la quantità sia ordina in modo Ascendente 1....10

const only_elettronica = prodotti
  .filter((p) => p.categoria == "Elettronica")
  .map((p) => ({ nome: p.nome, quantità: p.quantità }))
  .sort((a, b) => a.quantità - b.quantità);
console.log(only_elettronica);

//-----------------------------------------//

async function recuperaDatiAPI() {
  // URL dell'API a cui vogliamo fare la richiesta
  const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
  try {
    // 2. Usiamo 'await fetch(url)' per inviare la richiesta
    // La funzione fetch restituisce una Promise che si risolve nell'oggetto Response
    const response = await fetch(apiUrl);

    // 3. Controlliamo se la risposta è andata a buon fine (status 200-299)
    if (!response.ok) {
      // Se lo stato della risposta non è 'ok', solleviamo un errore
      throw new Error(`Errore di rete: ${response.status}`);
    }

    // 4. Usiamo 'await response.json()' per estrarre il corpo della risposta in formato JSON
    // Questo restituisce una Promise che si risolve nel dato JSON
    const data = await response.json();

    // 5. Stampiamo i dati recuperati
    console.log("Dati recuperati con successo:", data);

    // La funzione restituisce i dati recuperati
    return data;
  } catch (error) {
    // 6. Gestione degli errori (es. problemi di rete, URL errato, errore di risposta)
    console.error(
      "Si è verificato un errore durante il recupero dei dati:",
      error.message
    );
  }
}

// 7. Chiamiamo la funzione per avviare l'operazione
recuperaDatiAPI();

const response = fetch("https://jsonplaceholder.typicode.com/posts/1");
