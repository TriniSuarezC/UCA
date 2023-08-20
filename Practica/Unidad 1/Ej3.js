const printString = (n) => console.log("Execution numeber: "+ n);

const funToRepeat = function(n){
    printString(n);
}

function repeat(funToRepeat, n){
    let arreglo = new Array(n);
    arreglo.fill(1);
    arreglo.forEach((element,index) => funToRepeat(index+1));
}
console.log("Ejemplo de ejecucion con n = 3");
repeat(funToRepeat,3);