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
  var randomNumber = Math.floor((Math.random() * b) + a);
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
// for ( var i = 0; i < 16; i++) {
//   arrayMinePosition.push(random(1, 100));
//   // if (minePosition !== minePosition) {
//     // console.log(arrayMinePosition);
//   // }
// }
// console.log(arrayMinePosition);
// // Che può produrre numeri randomici che si ripteno; come di seguito:
// // script.js:63 (16) [100, 92, 63, 75, 18, 66, 88, 47, 11, 85, 82, 19, 82, 28, 98, 81]
// // -----------------------------------------------------------------------------------------------------------------------
// Sostituisco il ciclo For, di cui sopra, con un While:
while (arrayMinePosition.length < 16) {
  var numRandom = random(1,100);//Crea un numero random e lo salva nella var NumRandom
  if (arrayMinePosition.includes(numRandom) === false) {
    arrayMinePosition.push(numRandom);
  }
}
console.log(arrayMinePosition);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// --------------------------------------------------------------------------------------------------------------------------
//Il dato inserito dall'utente deve però esser validato. Creo per questo una funzione ad hoc che chiamo stringValid il cui parametro inputUtente sarà popolato dal valore di string:
function stringValid(inputUtente) {
  //String deve essere un numero, compreso tra 1 e 100
  if (isNaN(inputUtente) || (inputUtente) > 100 || (inputUtente) <= 0) {
    return false;
  }
  return true;
}
// Ricordiamo, però, che l'input utente deve esser inserito ben 84 volte. Inoltre, l’utente non può inserire più volte lo stesso numero. Dunque il prompt va inserito in un ciclo in cui venga effettuato anche il controllo sul numero inserito attraverso un IF.
//Ho bisogno, però, di un array vuoto, ovviamente esterno al Ciclo, che si popoli , di volta in volta, con i valori inseriti dall'utente:
var arrayUserNumbers = [];
//Qui sotto andrà il ciclo while:
// ------------------------------------------------------------------------------------------------------------------------------
var string = parseInt(prompt('Inserisci un numero tra 1 e 100'));
stringValid(string);
console.log(string);
if (stringValid(inputUtente)) {
  if (arrayUserNumbers.includes(string) === true) {
    alert('Numero già inserito');
  } else {
      //SE il numero non è stato inserito deve sottoporlo a validazione che effettuo a mezzo di una nuova funzione. Questa dovendo confrontare i valori generati in arrayMinePosition con quelli inseriti dall'utente(string), avrà come argomenti: arrayMinePosition & string
      isWinning(arrayMinePosition,string);
  }
}

// -----------------------------------------------------------------------------------------------------------------------------
// function isWinning (arrayMinePosition,string) {
//   if(arrayMinePosition.includes(string)) {
//     return false;
//   }
//   return true;
// }
function isWinning(arrayMinePosition,string) {
  if(arrayMinePosition.includes(string)) {
    alert('Hai perso');
  }
  alert('Hai vinto');
}
