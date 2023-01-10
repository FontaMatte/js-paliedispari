/*
STEP:
1. chiedo all'utenti di scegliere pari o dispari
2. chiedo all'utenti di scegliere un numero tra 1 e 5
3. Definire una funzione che generi un numero random da 1 a 5
4. Sommo i 2 numeri aquisiti nello step 2 e 3
4. Definire una funzione che stabilisca se la somma dei due numeri è pari o dispari
5. Dico all'utente se ha vinto o perso
*/


// scrio la funzione per generare il numero casuale da 1 a 5
function randomNum() {

    const numero = Math.floor(Math.random() * 5 + 1);
    return numero;
}

// scrivo la funzione che stabilisce se un numero e pari o dispari
function pariDispari(num) {
    if (num % 2 == 0) {
        return 'pari';
    }    
    else {
        return 'dispari';
    }   
}

// Utilizzo la funzione randomNum per generare un numero casuale tra 1 e 5
const pcNumber = randomNum();
console.log('numero random pc: ' ,pcNumber);

// chiedo all'utente di scegliere tra pari e dispari
const pariDispariUser = prompt('scegli tra pari e dispari');

// controllo che l'utente abbia inserito un valore valido
if ((pariDispariUser == 'pari') || (pariDispariUser == 'dispari')) {

    // chiedo all'utente di scegliere un numero tra 1 e 5
    const userNumber = parseInt(prompt('scegli un numero tra 1 e 5'));
    console.log('numero scelto utente: ' ,userNumber);

    // faccio la somma di pcNumber e userNumber
    const numberSum = pcNumber + userNumber;
    console.log('somma numeri: ',numberSum);

    // utilizzo la funzione pariDispari per verificare se il numero risulatnte della somma e pari o dispari
    const pariDispariSum = pariDispari(numberSum);
    console.log("la somma e' un numero:",pariDispariSum);

    // uso una condizione per stabilire se l'utente ha vinto o perso
    if (pariDispariSum == pariDispariUser) {
        alert('hai vinto, la somma dei numeri e: ' + numberSum);
    }
    else {
        alert('hai perso, la somma dei numeri e: ' + numberSum);
    }

}
else {
    alert('il valore che hai inserito non e valido');
}