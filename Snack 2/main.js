let squadre = [
    {
        'nome': 'Atalanta',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Bologna',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Cagliari',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Empoli',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Fiorentina',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Genoa',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Inter',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Juventus',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Lazio',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Milan',
        'punti': 0,
        'falli': 0
    }
];
console.log (squadre)

let squadre2 = [];
let squadre3 = [];

for (i=0; i < squadre.length; i++) {
    let punti = getRandomInt(100);
    let falli = getRandomInt(20);
    
    squadre2[i] = {...squadre[i], 'punti': punti, 'falli': falli}
    
    squadre3[i] = {
        'nome': squadre[i].nome,
        'falli': squadre2[i].falli
    };
    
    let risultato = document.getElementById("container")
    risultato.innerHTML += `
    <div>${squadre3[i].nome}</div>
    <div>Falli Subiti: ${squadre3[i].falli}</div>
    `
}

console.log(squadre2);

console.log(squadre3)






function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}