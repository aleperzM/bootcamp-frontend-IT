const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);

//Punto 5
const num = []

for(let i =0;i<100;i++){
    num.push(i+1)
}
console.log(v, oo + " numeros 1-100");
console.log(num);
console.log(o);

const numMult = num.map(e=>e*2)

console.log(v, oo + "numeros multiplicados por 2");
console.log(numMult);
console.log(o);

//Punto 6

const mayorA5 = numMult.filter(elem => elem > 5)
console.log(v, oo + "numeros mayores a 5");
console.log(mayorA5);
console.log(o);

//Punto 7

const mayorA10 = numMult.find(elem => elem > 10)
console.log(v, oo + "primer numero mayor a 10");
console.log(mayorA10);
console.log(o);

//punto 8

let pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
    { nombre: 'bulbasaur', poder: 6 },
    { nombre: 'charizard', poder: 19 },
    { nombre: 'squirtle', poder: 3 },
    { nombre: 'metwo', poder: 6 }, 
]
const pokemonesPoder10= pokemones.filter(elem => elem.poder<10)

console.log(v, oo + "pokemones poder menor a 10");
console.log(pokemonesPoder10);
console.log(o);