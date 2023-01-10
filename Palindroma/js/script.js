/*
STEP:
1. Definire una funzione che verifichi se una parola e palindroma
2. Chiedere la parola all'utente all'utente
3. Utilizzando la funzione appena definita, dire all'utente se la parola e palindroma o meno
*/

// definisco la funzione
function palindroma(parola) {

    if ((parola[0] == parola[parola.length - 1]) && (parola[1] == parola[parola.length - 2])) {

        return true;    
    }
    else {

        return false;
    }
}

// chiedo la parola all'utente
const word = prompt('inserisci una parola');

const risposta = palindroma(word);

if (palindroma(word)) {
    alert('la parola e palindroma');
}
else {
    alert('la parola non e palindroma');
}