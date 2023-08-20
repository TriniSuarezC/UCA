/*Escribir una función howManyTimesAppears que reciba como parámetro un arreglo de
números y un número. Esta función devolverá la cantidad de veces que aparece el número
(recibido por parámetro) en el arreglo. En caso de no aparecer, la función debe devolver “0”
(cero).
*/

const arr = [ 3, 6, 9, 3, 1, 5, 2, 10]

function howManyTimesAppears(arreglo, n){
    cont=0;
    var res = arr.map(function(x){
        if (x==n){
            cont++;
        }
    })
    return cont;
}

console.log(howManyTimesAppears(arr, 3));
console.log(howManyTimesAppears(arr, 5));
console.log(howManyTimesAppears(arr, 7));
