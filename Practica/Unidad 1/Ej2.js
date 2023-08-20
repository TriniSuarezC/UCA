function crearResta(x){
    return function(y){
        return x-y;
    } 
}

var resta = crearResta(10);
console.log(resta(7));

//x es n e y es m