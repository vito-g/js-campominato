// TRACCIA:
// Esercizio di oggi: campo minato
// repo/cartella:  js-campominato
// Descrizione:

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati (tadaaa!)
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire millemila numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…
//
// N.B.: Un piccolo memorandum/hint : ricordiamoci che un ciclo for si ripete sempre un numero di volte prestabilito
// (tante quante gliene indichiamo noi)  mentre un ciclo while si ripete finché la condizione indicata risulta vera e,
// a differenza del for, non è legato per forza a un contatore (ma appunto a una condizione che si deve verificare affinché
// il codice al suo interno venga eseguito!).
// Quindi se non sappiamo esattamente quante volte si deve ripetere un'istruzione , cosa sarà meglio usare tra i due?


// Il computer deve generare 16 numeri casuali tra 1 e 100.
//Creazione funzione ad hoc.
//Creo prima una var che condenga l'espressione per il calcolo dei numeri randomici tra 1 e 100:
// var randomNumber = Math.floor((Math.random() * 100) + 1);
// console.log(randomNumber);
//La userò, all'interno di una funzione:
function random(a, b) {
  randomNumber = Math.floor((Math.random() * b) + a);
  // console.log(randomNumber);
  return randomNumber;
}

// var minePosition = random(1, 100);
// console.log('Un numero randomico da 1 a 100 è: ' + minePosition);

//Ma, lo ribadisco: Il computer deve generare 16 numeri casuali. Posso, dunque, usare un ciclo FOR che abbia al suo interno la CALL alla funzione sopra creata:
// for ( var i = 1; i <= 16; i++) { //(**)
//   var minePosition = random(1, 100);
//   console.log(minePosition);
// }
// Come da traccia, però, "I numeri non possono essere duplicati (tadaaa!)". Devo fare in modo, dunque, che ciascuno dei 16 numeri individuati randomicamente sia diverso da tutti gli altri. Mi occorre una Condizione che faccia questa verifica: Istruzione IF da inserire nel Ciclo FOR:
// -----------------------------------
var arrayMinePosition = [];
for ( var i = 0; i < 16; i++) {
  arrayMinePosition.push(random(1, 100));
  // if (minePosition !== minePosition) {
    // console.log(arrayMinePosition);
  // }
}
console.log(arrayMinePosition);
// Che può produrre numeri randomici che si ripteno; come di seguito:
// script.js:63 (16) [100, 92, 63, 75, 18, 66, 88, 47, 11, 85, 82, 19, 82, 28, 98, 81]
var k = 0;
var arrayMineOk = [];
arrayMineOk.push(arrayMinePosition[0]);
console.log(arrayMineOk);//L'array arrayMineOk lo popolo col primo item preso dall'array precedente.
//Il for che segue controlla solo che il primo item del nuovo array sia diverso da tutti quelli che lo precedereanno

for (var x = 1; x < arrayMinePosition.length; x++) {
  if (arrayMinePosition[0 + k] / arrayMinePosition[x] !== 1) {
    // console.log(arrayMinePosition[x]);
    arrayMineOk.push(arrayMinePosition[x]);
    console.log(arrayMineOk);//Aggiorna l'array ad ogni iterazione del ciclo
  } else {
    arrayMineOk.push(random(1,100));
  }

}
console.log(arrayMineOk);
//Che da un risultato del tipo:
// script.js:63 (16) [2, 19, 65, 20, 44, 32, 62, 84, 48, 87, 2, 84, 93, 44, 88, 54]
// script.js:69 [2]
// script.js:76 (2) [2, 19]
// script.js:76 (3) [2, 19, 65]
// script.js:76 (4) [2, 19, 65, 20]
// script.js:76 (5) [2, 19, 65, 20, 44]
// script.js:76 (6) [2, 19, 65, 20, 44, 32]
// script.js:76 (7) [2, 19, 65, 20, 44, 32, 62]
// script.js:76 (8) [2, 19, 65, 20, 44, 32, 62, 84]
// script.js:76 (9) [2, 19, 65, 20, 44, 32, 62, 84, 48]
// script.js:76 (10) [2, 19, 65, 20, 44, 32, 62, 84, 48, 87]
// script.js:76 (12) [2, 19, 65, 20, 44, 32, 62, 84, 48, 87, 69, 84]
// script.js:76 (13) [2, 19, 65, 20, 44, 32, 62, 84, 48, 87, 69, 84, 93]
// script.js:76 (14) [2, 19, 65, 20, 44, 32, 62, 84, 48, 87, 69, 84, 93, 44]
// script.js:76 (15) [2, 19, 65, 20, 44, 32, 62, 84, 48, 87, 69, 84, 93, 44, 88]
// script.js:76 (16) [2, 19, 65, 20, 44, 32, 62, 84, 48, 87, 69, 84, 93, 44, 88, 54]
// script.js:82 (16) [2, 19, 65, 20, 44, 32, 62, 84, 48, 87, 69, 84, 93, 44, 88, 54]
//oppure, similmente:
// script.js:63 (16) [92, 14, 92, 33, 90, 65, 97, 13, 21, 66, 37, 63, 4, 85, 68, 91]
// script.js:69 [92]
// script.js:76 (2) [92, 14]
// script.js:76 (4) [92, 14, 33, 33]
// script.js:76 (5) [92, 14, 33, 33, 90]
// script.js:76 (6) [92, 14, 33, 33, 90, 65]
// script.js:76 (7) [92, 14, 33, 33, 90, 65, 97]
// script.js:76 (8) [92, 14, 33, 33, 90, 65, 97, 13]
// script.js:76 (9) [92, 14, 33, 33, 90, 65, 97, 13, 21]
// script.js:76 (10) [92, 14, 33, 33, 90, 65, 97, 13, 21, 66]
// script.js:76 (11) [92, 14, 33, 33, 90, 65, 97, 13, 21, 66, 37]
// script.js:76 (12) [92, 14, 33, 33, 90, 65, 97, 13, 21, 66, 37, 63]
// script.js:76 (13) [92, 14, 33, 33, 90, 65, 97, 13, 21, 66, 37, 63, 4]
// script.js:76 (14) [92, 14, 33, 33, 90, 65, 97, 13, 21, 66, 37, 63, 4, 85]
// script.js:76 (15) [92, 14, 33, 33, 90, 65, 97, 13, 21, 66, 37, 63, 4, 85, 68]
// script.js:76 (16) [92, 14, 33, 33, 90, 65, 97, 13, 21, 66, 37, 63, 4, 85, 68, 91]
// script.js:82 (16) [92, 14, 33, 33, 90, 65, 97, 13, 21, 66, 37, 63, 4, 85, 68, 91]
