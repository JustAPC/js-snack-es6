// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
console.log (`L'array di partenza è ${myArray}`)

let min = 3;
let max = 5;

let arrayForEach = [];

myArray.forEach((element, i) => {
    if (i >= min && i <= max) {
        arrayForEach.push(element)
    }
});
console.log(`Array richiesto con ForEach: ${arrayForEach}`)


let arrayFilter = myArray.filter((element, i) => {
    return i >= min && i <= max;
})
console.log(`Array richiesto con Filter: ${arrayFilter}`)