// // Descrizione:
// ESERCIZIO 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// ESERCIZIO 2 
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// ESERCIZIO 3
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// ESERCIZIO 1

const studenteUno = {
    nome: 'Lorenzo',
    cognome: 'Castelli',
    eta: 19
};

for ( let key in studenteUno){
    console.log(studenteUno[key]);
}