let bici = [
    {
        'nome': 'Bianchi',
        'peso': 6 + " kg"
    },
    {
        'nome': 'Argon 18',
        'peso': 7 + " kg"
    },
    {
        'nome': 'Atala',
        'peso': 6.4 + " kg"
    },
    {
        'nome': 'Basso',
        'peso': 6.3 + " kg"
    },
    {
        'nome': 'Battaglin',
        'peso': 6.5 + " kg"
    },
    {
        'nome': '3T',
        'peso': 6.6 + " kg"
    },
]

console.log (bici)

let pesoMinore = bici[0];
for (let i = 0; i < bici.length; i++) {
    let x = bici[i]
    if (pesoMinore["peso"] > x["peso"]){
        peso = x
    }
}

let {nome, peso} = pesoMinore

console.log(pesoMinore)
let stampa = document.getElementById("container")
stampa.innerHTML += `
<div>La bici più leggera è la ${nome} e pesa ${peso}</div>
`