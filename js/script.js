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

// const studenteUno = {
//     nome: 'Lorenzo',
//     cognome: 'Castelli',
//     eta: 19
// };

// for ( let key in studenteUno){
//     console.log(studenteUno[key]);
// }

// ESERCIZIO 2

const studenti = 
[
    {   
        nome: 'Lorenzo',
        cognome: 'Castelli',
        eta: 19
    },
    {   
        nome: 'Marco',
        cognome: 'Piotto',
        eta: 45
    },
    {   
        nome: 'Luigi',
        cognome: 'Andreatta',
        eta: 15
    },
    {   
        nome: 'Marco',
        cognome: 'Novello',
        eta: 22

    }

];

for ( i = 0; i < studenti.length; i++){

    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
}

// // ESERCIZIO 3

// const newStudent = {
//     nome: prompt('Nome'),
//     cognome: prompt('Cognome'),
//     eta: parseInt(prompt('età'))
// };

// studenti.push(newStudent);

// console.log(studenti);