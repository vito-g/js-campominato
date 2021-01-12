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
//Creo prima una var che contenga l'espressione per il calcolo di un numero randomico tra 1 e 100:
// var randomNumber = Math.floor((Math.random() * 100) + 1);
// console.log(randomNumber);
//La userò, dunque, all'interno di una funzione i cui parametri, a e b, si popoleranno dei valori 1 e 100:
function random(a, b) {
  var randomNumber = Math.floor((Math.random() * b) + a);
  // console.log(randomNumber);
  return randomNumber;//restituirà il valore calcolato, nel punto in cui la funzione verrà richiamata.
}

// var minePosition = random(1, 100);
// console.log('Un numero randomico da 1 a 100 è: ' + minePosition);

//Ma, lo ribadisco: Il computer deve generare, non uno, ma 16 numeri casuali. Posso, dunque, usare un ciclo FOR che abbia al suo interno la CALL alla funzione sopra creata:
// for ( var i = 1; i <= 16; i++) {
//   var minePosition = random(1, 100);
//   console.log(minePosition);
// }
// Come da traccia, però, "si deve escludere che ciascuno numero (che inserirò di volta in volta in un array) si possa ripetere all'interno dell' array". Fatta questa verifica, popolerò l' array sino ad un max di 16 numeri. Mi occorrerà, anche, una Condizione che faccia questa verifica: Istruzione IF da inserire in un Ciclo:
// -----------------------------------
var arrayMinePosition = [];
// for ( var i = 0; i < 16; i++) {
//   arrayMinePosition.push(random(1, 100));
// }
// console.log(arrayMinePosition);
// // Che può produrre numeri randomici che si ripetono; come di seguito:
// // script.js:63 (16) [100, 92, 63, 75, 18, 66, 88, 47, 11, 85, 82, 19, 82, 28, 98, 81]
// // -----------------------------------------------------------------------------------------------------------------------
// Sostituisco, pertanto, il ciclo For, di cui sopra, con un While. Non conosco, infatti, a priori, quante volte sarà necessario randomizzare un numero, prima che l'array sia popolato da valori numerici che siano unici. Escludo così il contatore, tipico del Ciclo FOR, attendendomi esclusivamente al raggiungimento del riempimento max dell'array con numeri che non si ripetano in esso.
while (arrayMinePosition.length < 16) {
  var numRandom = random(1,100);//Crea un numero random e lo salva nella var NumRandom
  //Pusho esclusivamente numeri non ancora presenti nell'array:
  if (arrayMinePosition.includes(numRandom) === false) {
    arrayMinePosition.push(numRandom);
  }
}
console.log(arrayMinePosition);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// --------------------------------------------------------------------------------------------------------------------------
//Il dato numerico che l'utente inserirà attraverso un prompt (e che salverò nella var "string") dovrà, però, esser validato. Creo per questo una FX ad hoc che chiamo "stringValid" il cui parametro "inputUtente" sarà popolato dal valore di "string" (che ne sarà, dunque, argomento):
function stringValid(inputUtente) {
  //L'input dell'utente deve essere un numero (userò, dunque, il parseInt in fase di prompt) che dovrà esser compreso tra 1 e 100
  if (isNaN(inputUtente) || (inputUtente) > 100 || (inputUtente) <= 0) {
    return false;
  }
  return true;
}
// Ricordiamo, però, che l'input utente deve esser inserito ben 84 volte. Inoltre, l’utente non può inserire più volte lo stesso numero. Dunque, il prompt va inserito in un ciclo in cui si verifichi che: lo stesso numero non sia stato inserito + volte dall'utente; e che il numero di input utente non abbia superato un max di 84 inserimenti di valori accettabili e vincenti.
//Ho bisogno, però, di un array vuoto, ovviamente esterno al Ciclo, che si popoli , di volta in volta, con i valori inseriti dall'utente finchè questi risultano non presenti nell'array randomico di 16 numeri identificativi delle mine. In altri termini, se il numero scelto dall'utente è pari ad uno presente nella lista delle mine, l'utente perde ed il game si interrompe.
// Diversamente ad ogni numero inserito senza che avvenga alcuna "esplosione" delle mine lo SCORE dell'utente aumenterà di un punto. Quindi se l'utente inserirà, per es, 3 soli numeri vincenti, l'array si popolerà fino a questi numeri vincenti. Lo SCORE finale sarà dunque dato dalla lunghezza dell'array.
var arrayUserNumbers = [];
//Qui sotto andrà il ciclo while:
// ------------------------------------------------------------------------------------------------------------------------------
while (isWinning(arrayMinePosition,string) && arrayUserNumbers.length < 84) {
  var string = parseInt(prompt('Inserisci un numero tra 1 e 100'));
  if (stringValid(string)) { //SE la FX "stringValid" restituisce valore TRUE: i valori inseriti dall'utente sono accettabili e lo script esegue il blocco di codice che segue
    if (arrayUserNumbers.includes(string)) { //Se il numero inserito è incluso già nell'array, allora avvisa l'utente di questo.
      alert('Numero già inserito');
    } else {
      //SE il numero non è già stato inserito devo controllare che non corrisponda a nessuno dei 16 numeri, randomizzati precedentemente ed inseriti in un array, identificativi delle mine. Faccio il controllo a mezzo di una nuova FX che chiamerò "isWinning". Questa, dovendo confrontare i valori generati in arrayMinePosition con quelli inseriti dall'utente(string), riceverà come argomenti i valori di: arrayMinePosition & string. Dunque avrà per parametri: arrayMinePosition & string.
      // if (isWinning(arrayMinePosition,string) == false) { //Riga di codice che posso anche scrivere come segue
      if (!isWinning(arrayMinePosition,string)) {
        alert('Hai perso! Ed Il tuo punteggio è ' + arrayUserNumbers.length);
      }
      arrayUserNumbers.push(string);
      if (arrayUserNumbers.length === 84) {
        alert('Hai vinto! Ed Il tuo punteggio è ' + arrayUserNumbers.length);
      }
    }
  } else {
     alert('Devi inserire un numero da 1 a 100');
  }
}
// -----------------------------------------------------------------------------------------------------------------------------
function isWinning (arrayMinePosition,string) {
  if(arrayMinePosition.includes(string)) { //Se l'input utente è presente nella lista dei numeri identificativi delle mine allora non stai vincendo: YOU is NOT winning: quindi isWinning lo imposto a false
    return false;
  }
  return true;
}
