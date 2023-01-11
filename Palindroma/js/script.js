/*
STEP:
1. Definire una funzione che verifichi se una parola e palindroma
2. Chiedere la parola all'utente all'utente
3. Utilizzando la funzione appena definita, dire all'utente se la parola e palindroma o meno
*/

// definisco la funzione
function palindroma(parola) {

    let parolaInversa = '';

    for (let i = parola.length - 1; i >= 0; i--) {
        console.log(parola[i]);
        parolaInversa = parolaInversa + parola[i];
    }

    console.log(parolaInversa);

    if (parola == parolaInversa) {
        return true;
    }
    else {
        return false;
    }
}

// chiedo la parola all'utente
const word = prompt('inserisci una parola');

const risultato = palindroma(word)

if (risultato) {
    alert('la parola e palindroma');
}
else {
    alert('la parola non e palindroma');
}