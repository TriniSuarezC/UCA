const pilotos = ["Verstappen", "Hamilton", "Russell", "Sainz", "Perez", "Leclerc", "Norris",
"Alonso", "Ocon", "Vettel"];

//a
console.log((pilotos.indexOf("Russell"))+1);

//b
const found = pilotos.find(element => pilotos.indexOf(element)==5);
console.log(found);

//c
const result = pilotos.filter(word => word.includes('a') || word.includes('A'));
console.log(result);

//d
const pilotos2 = ["Russell", "Bottas","Perez"];
const res = pilotos2.map(piloto => pilotos.includes(piloto));
console.log(res);

//e
const perez = pilotos.splice(1,0,'Perez')
const perez1 = pilotos.splice(5,1);
console.log(pilotos);
