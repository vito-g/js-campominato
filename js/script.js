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
var randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);
